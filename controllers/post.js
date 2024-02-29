const Post = require("../models/post")

module.exports = {
  findAllPosts,
  findPost,
  createPost,
  updatePost,
  deletePost,
}

//find all Posts
async function findAllPosts(res) {
  const post = await Post.find({})
  res.send(post)
}

//find specific Post
async function findPost(req, res) {
  const post = await Post.findById(req.params.id)
    .populate("like")
    .populate("comment")
  res.send(post)
}
//create Post
async function createPost(req, res) {
  try {
    await Post.create(req.body)
    res.send("Post Created")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
//update Post
async function updatePost(req, res) {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body)
    res.send("Post Updated")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
//delete Post
async function deletePost(req, res) {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.send("Post Deleted")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
