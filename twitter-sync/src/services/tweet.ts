import api from './api'
import { AxiosResponse } from 'axios'
import Tweet, { TweetInterface } from '../models/Tweet'
import logger from '../utils/logger'
import { twStringToDate } from '../utils/dateformat'

const log = logger(module)

class TweetService {
  async getTweetsByTag (hashtag: string) : Promise<AxiosResponse<any>> {
    log.info(`Buscando dados na API do Twitter para Hashtag: ${hashtag}.`)
    try {
      const response = await api.get(`/1.1/search/tweets.json?q=%23${hashtag}&result_type=recent`)

      log.info(`Busca feita com sucesso para a Hashtag: ${hashtag}.`)

      return response
    } catch (ex) {
      log.error(`Não foi possível buscar os dados para a Hashtag: ${hashtag}.`)
    }
  }

  async sanitizeListTweets (hashtag: string, response: AxiosResponse<any>) : Promise<AxiosResponse<TweetInterface>> {
    log.info(`Tratando os dados para a hashtag: ${hashtag}.`)
    const withoutOthersTrag = await response.data.statuses.filter(function (value) {
      return value.entities.hashtags.map(c => c.text.toUpperCase()).includes(hashtag.toUpperCase())
    })

    const sanitezed = await withoutOthersTrag.map(tweet => ({
      idTwitter: tweet.id,
      user: tweet.user.name,
      userFollowers: tweet.user.followers_count,
      userLang: tweet.lang,
      userCountry: tweet.place ? tweet.place.country : 'None',
      createdAt: twStringToDate(tweet.created_at),
      hashtags: hashtag
    }))

    log.info(`Tratamento de dados dos dados para a hashtag ${hashtag} finalizado com sucesso.`)
    return sanitezed
  }

  async saveTweets (hashtag, list: any) : Promise<TweetInterface> {
    log.info(`Salvando os dados para hashtag: ${hashtag}`)

    const inserts = await Tweet.insertMany(list)

    log.info(`${list.length} registros da hashtag: ${hashtag} salvos com sucesso.`)

    return inserts
  }
}

export default TweetService
