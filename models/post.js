const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    image: String,
    text: String,
    hashtag: [String],
    like: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Post", postSchema)
