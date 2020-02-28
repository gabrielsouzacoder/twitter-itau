import { Router } from 'express'
import TweetController from './TweetController'

class TweetRouter {
  public routes: Router

  constructor () {
    this.routes = Router()
    this.routes.get('/error', TweetController.generateError)
    this.routes.get('/tweets', TweetController.index)
    this.routes.get('/tweets/topfive', TweetController.returnTopFiveOfFollowers)
    this.routes.get('/tweets/group/createdat', TweetController.returnCountByCreatedAt)
    this.routes.get('/tweets/group/lang', TweetController.returnCountByLang)
  }
}

export default new TweetRouter().routes
