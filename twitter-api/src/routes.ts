import { Router } from 'express'
import TweetRouter from './resources/tweet/TweetRouter'

class Routers {
  public routes: Router

  constructor () {
    this.routes = Router()

    this.routes.use(TweetRouter)
  }
}

export default new Routers().routes
