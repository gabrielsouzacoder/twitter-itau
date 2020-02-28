import mongoose from 'mongoose'

export interface TweetInterface extends mongoose.Document {
  user: string,
  idTwitter: number,
  userFollowers: number,
  userLang: string,
  userCountry: string,
  createdAt: Date,
  hashtags: string
}

const TweetModel = new mongoose.Schema({
  user: String,
  idTwitter: Number,
  userFollowers: Number,
  userLang: String,
  userCountry: String,
  createdAt: Date,
  hashtags: String
})

export default mongoose.model<TweetInterface>('Tweet', TweetModel)
