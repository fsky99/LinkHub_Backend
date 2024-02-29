const Reply = require("../models/reply")

module.exports = {
  findAllReplies,
  findReply,
  createReply,
  updateReply,
  deleteReply,
}

//find all Replies
async function findAllReplies(req,res) {
  const reply = await Reply.find({})
  res.send(reply)
}

//find specific Reply
async function findReply(req, res) {
  const reply = await Reply.findById(req.params.id).populate("userId")
  res.send(reply)
}
//create Reply
async function createReply(req, res) {
  try {
    await Reply.create(req.body)
    res.send("Reply Created")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
//update Reply
async function updateReply(req, res) {
  try {
    await Reply.findByIdAndUpdate(req.params.id, req.body)
    res.send("Reply Updated")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
//delete Reply
async function deleteReply(req, res) {
  try {
    await Reply.findByIdAndDelete(req.params.id)
    res.send("Reply Deleted")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
