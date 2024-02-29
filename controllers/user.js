const User = require("../models/user")

module.exports = {
  findAllUsers,
  findUser,
}

//find all users
async function findAllUsers(res) {
  const user = await User.find({})
  res.send(user)
}

//find specific user
async function findUser(req, res) {
  const user = await User.findById(req.params.id).populate('posts').populate('following').populate('followers')
  res.send(user)
}
