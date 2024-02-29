const User = require("../models/user")

module.exports = {
  findAllUsers,
  findUser,
  createUser,
  updateUser,
  deleteUser,
}

//find all users
async function findAllUsers(req,res) {
  const user = await User.find({})
  res.send(user)
}

//find specific user
async function findUser(req, res) {
  const user = await User.findById(req.params.id)
    .populate("posts")
    .populate("following")
    .populate("followers")
  res.send(user)
}
//create user
async function createUser(req, res) {
  try {
    await User.create(req.body)
    res.send("User Created")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
//update user
async function updateUser(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.send("User Updated")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
//delete user
async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.send("User Deleted")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
