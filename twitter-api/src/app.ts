import express from 'express'
import mongodb from './db/mongo'
import routes from './routes'
import morgan from 'morgan'
import json from 'morgan-json'
import moment from 'moment-timezone'
import promMid from 'express-prometheus-middleware'
import cors from 'cors'
import ExceptionMiddleware from './middlewares/ExceptionMiddleware'

class Application {
  public express: express.Application
  constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
    this.error()
  }

  private middlewares (): void {
    this.http()
    this.prometheus()
    this.morgan()
  }

  private error (): void {
    this.express.use(ExceptionMiddleware)
  }

  private http (): void {
    this.express.use(cors())
  }

  private prometheus () : void {
    this.express.use(promMid({
      metricsPath: '/metrics',
      requestDurationBuckets: [0.1, 0.5, 1, 1.5],
      normalizeStatus: false
    }))
  }

  private morgan () : void {
    const format = json({
      timestamp: ':date',
      method: ':method',
      router: ':url',
      status: ':status',
      length: ':res[content-length]',
      'response-time': ':response-time',
      'unit-time': 'ms'
    })

    morgan.token('date', () => {
      return moment().utc().utcOffset('-0300').format()
    })

    this.express.use(morgan(format))
  }

  private async database (): Promise<void> {
    // TODO colocar em variavel de ambiente
    await mongodb().catch(() => {
      process.exit(1)
    })
  }

  private routes () : void {
    this.express.use(routes)
  }
}

export default new Application().express
