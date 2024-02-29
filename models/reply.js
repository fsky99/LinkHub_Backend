const mongoose = require("mongoose")
const Schema = mongoose.Schema

const replaySchema = new Schema(
  {
    reply: String,
    date: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Reply", replaySchema)
