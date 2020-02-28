import { Request, Response, NextFunction } from 'express'
import TweetModel from './TweetModel'
import HttpException from '../../exceptions/HttpException'
import logger from '../../utils/logger'

const log = logger(module)

class TweetController {
  async index (req: Request, res: Response) : Promise<Response> {
    const tweets = await TweetModel.find({})

    return res.json(tweets)
  }

  async returnTopFiveOfFollowers (req: Request, res: Response) : Promise<Response> {
    const topFive = await TweetModel.find({}).limit(5).sort({
      userFollowers: -1
    })

    return res.json(topFive.map(c => ({
      user: c.user,
      followers: c.userFollowers,
      lang: c.userLang
    })))
  }

  async returnCountByCreatedAt (req: Request, res: Response) : Promise<Response> {
    const countByCreatedAt = await TweetModel.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%H', date: '$createdAt' } },
          count: { $sum: 1 }
        }
      }]).exec()

    return res.json(countByCreatedAt.map((c: { _id: any; count: any }) => {
      return ({
        hour: c._id,
        count: c.count
      })
    }).sort(function (a: any, b: any) { return a.hour - b.hour }))
  }

  async generateError (req: Request, res: Response, next: NextFunction) : Promise<Response|void> {
    log.error('Erro gerado manualmente.')
    return next(new HttpException(500, 'Erro gerado manualmente.', 'error'))
  }

  async returnCountByLang (req: Request, res: Response) : Promise<Response> {
    const countByLang = await TweetModel.aggregate([
      {
        $group: {
          _id: {
            hashtag: '$hashtags',
            userLang: '$userLang'

          },

          count: { $sum: 1 }

        }
      }]).exec()

    return res.json(countByLang)
  }
}

export default new TweetController()
