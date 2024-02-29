const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    comment: String,
    date: String,
    reply: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reply",
      },
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Comment", commentSchema)
