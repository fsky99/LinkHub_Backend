const Post = require("../models/post")
const fs = require("fs")
const path = require("path")

module.exports = {
  findAllPosts,
  findPost,
  createPost,
  updatePost,
  deletePost,
}

//find all Posts
async function findAllPosts(req, res) {
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
    const { image } = req.files

    if (!image) return res.status(400).send({ errorMsg: "No image uploaded" })

    const uploadPath = path.join(__dirname, "../uploads", image.name)

    await image.mv(uploadPath)

    const postData = {
     ...req.body,
      image: uploadPath,
     
    }
    await Post.create(postData)

    res.send("Post Created")
  } catch (error) {
    console.log("This is the error : " + error)
    res.status(500).send({ errorMsg: error.message })
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
