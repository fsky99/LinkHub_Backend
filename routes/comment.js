const express = require('express')
const router = express.Router()
const middleware = require('../middleware')

const commentCtrl = require('../controllers/comment')

router.get(
  '/',
  middleware.striptoken,
  middleware.verifyToken,
  commentCtrl.findAllComments
)
router.get(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  commentCtrl.findComment
)
router.post(
  '/',
  middleware.striptoken,
  middleware.verifyToken,
  commentCtrl.createComment
)
router.put(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  commentCtrl.updateComment
)
router.delete(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  commentCtrl.deleteComment
)
module.exports = router
