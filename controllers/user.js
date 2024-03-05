const User = require('../models/user')
const middleware = require('../middleware')

module.exports = {
  findAllUsers,
  findUser,
  createUser,
  updateUser,
  deleteUser,
  register,
  signin,
  checkSession
}

//find all users
async function findAllUsers(req, res) {
  const user = await User.find({})
  res.send(user)
}

//find specific user
async function findUser(req, res) {
  try {
    const user = await User.findById(req.params.id)
      .populate('posts')
      .populate('following')
      .populate('followers')
    res.send(user)
    
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server error")
  }
}
//create user
async function createUser(req, res) {
  try {
    await User.create(req.body)
    res.send('User Created')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}
//update user
async function updateUser(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.send('User Updated')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}
//delete user
async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.send('User Deleted')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}

async function signin(req, res) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let matched = await middleware.comparePassword(user.password, password)
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
  }
}

async function register(req, res) {
  try {
    const { email, password, userName } = req.body
    console.log('password', password)
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else {
      const user = await User.create({
        email,
        password: passwordDigest,
        userName
      })
      res.send(user)
    }
  } catch (error) {
    console.log(error)
  }
}

async function checkSession(req, res) {
  const { payload } = res.locals
  // console.log(res.locals)
  res.send(payload)
}
