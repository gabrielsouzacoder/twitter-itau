import { Request, Response, NextFunction } from 'express'
import HttpException from '../exceptions/HttpException'

function ExceptionMiddleware (error: HttpException, request: Request, response: Response, next: NextFunction) : any {
  const status = error.status || 500
  const message = error.message || 'Alguma coisa deu errado.'
  const level = error.level || 'error'

  return response
    .status(status)
    .json({
      level: level,
      error: message
    })
}

export default ExceptionMiddleware
