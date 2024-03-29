const express = require('express')
const router = express.Router()
const middleware = require('../middleware')
const multer = require('multer')

const postCtrl = require('../controllers/post')

const upload = multer({
  dest: '../uploads'
})

router.get(
  '/',
  middleware.striptoken,
  middleware.verifyToken,
  postCtrl.findAllPosts
)
router.get(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  postCtrl.findPost
)
router.post(
  '/',
  middleware.striptoken,
  middleware.verifyToken,
  postCtrl.createPost
)
router.put(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  postCtrl.updatePost
)
router.delete(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  postCtrl.deletePost
)
module.exports = router
