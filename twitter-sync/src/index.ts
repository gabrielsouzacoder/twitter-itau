import TweetService from './services/tweet'
import mongodb from './db/mongo'

const list = ['openbanking', 'apifirst', 'devops', 'cloudfirst', 'microservices', 'apigateway', 'oauth', 'swagger', 'raml', 'openapis']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function main () : Promise<any[]> {
  await mongodb().catch(() => {
    process.exit(1)
  })

  const service = new TweetService()

  const promises = []

  list.map(hashtag => {
    promises.push(new Promise((resolve) => {
      service.getTweetsByTag(hashtag).then(tweets => {
        service.sanitizeListTweets(hashtag, tweets).then(tweetsSanitized => {
          service.saveTweets(hashtag, tweetsSanitized).then(() => {
            resolve(`Finalizado  ${hashtag}`)
          })
        })
      })
    }))
  })

  return promises
}

main().then(c => {
  Promise.all(c).then(c => console.log(c)).then(() => process.exit(0))
})
