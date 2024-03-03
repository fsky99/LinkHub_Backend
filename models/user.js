const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    role: String,
    userName: String,
    email: String,
    password: String,
    avatar: String,
    country: String,
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    status: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
