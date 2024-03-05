const Comment = require("../models/comment")
const Post = require("../models/post")
module.exports = {
  findAllComments,
  findComment,
  createComment,
  updateComment,
  deleteComment,
}

//find all Comment
async function findAllComments(req, res) {
  const comment = await Comment.find({})
  res.send(comment)
}

//find specific Comment
async function findComment(req, res) {
  const comment = await Comment.findById(req.params.id)
    .populate("reply")
    .populate("userId")
  res.send(comment)
}
//create Comment
async function createComment(req, res) {
  try {
    const newComment = await Comment.create(req.body)

    const userId = res.locals.payload.id
    const updatedUser = await Post.findByIdAndUpdate(
      req.body.postId,
      { $push: { comment: newComment._id } },
      { new: true }
    )
    console.log("Updated User:", updatedUser)

    res.send("Comment Created")
  } catch (error) {
    console.log("Error creating comment:", error)
    res.status(500).send({ errorMsg: error.message })
  }
}

//update Comment
async function updateComment(req, res) {
  try {
    await Comment.findByIdAndUpdate(req.params.id, req.body)
    res.send("Comment Updated")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
//delete Comment
async function deleteComment(req, res) {
  try {
    await Comment.findByIdAndDelete(req.params.id)
    res.send("Comment Deleted")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
