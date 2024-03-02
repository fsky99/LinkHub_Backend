const express = require('express')
const router = express.Router()
const middleware = require('../middleware')

const replyCtrl = require('../controllers/reply')

router.get(
  '/',
  middleware.striptoken,
  middleware.verifyToken,
  replyCtrl.findAllReplies
)
router.get(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  replyCtrl.findReply
)
router.post(
  '/',
  middleware.striptoken,
  middleware.verifyToken,
  replyCtrl.createReply
)
router.put(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  replyCtrl.updateReply
)
router.delete(
  '/:id',
  middleware.striptoken,
  middleware.verifyToken,
  replyCtrl.deleteReply
)
module.exports = router
