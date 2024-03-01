const User = require('../models/user')
const middleware = require('../middleware')

module.exports = {
  findAllUsers,
  findUser,
  login,
  register
}

//find all users
async function findAllUsers(req, res) {
  const user = await User.find({})
  res.send(user)
}

//find specific user
async function findUser(req, res) {
  const user = await User.findById(req.params.id)
    .populate('posts')
    .populate('following')
    .populate('followers')
  res.send(user)
}

async function login(req, res) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
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
