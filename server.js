let express = require('express')
var path = require('path')
const cors = require('cors')
let cookieParser = require('cookie-parser')
let logger = require('morgan')
const cloudinary = require('cloudinary').v2
const multer = require('multer')
require('dotenv').config()
require('./config/database')
const fileUpload = require('express-fileupload')
let userRouter = require('./routes/user')
let postRouter = require('./routes/post')
let commentRouter = require('./routes/comment')
let replyRouter = require('./routes/reply')

const homeRouter = require('./routes/home')
let app = express()
app.use(fileUpload())
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/profile', express.static(path.join(__dirname, 'uploads')))

app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use('/reply', replyRouter)

app.use('/', (req, res) => {
  console.log('connected')
})

app.use(function (req, res, next) {
  next(createError(404))
})
app.use(function (req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send('error')
})
app.listen(3000)

module.exports = app
