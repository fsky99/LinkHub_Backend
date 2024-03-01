// this is just so that the folder can be uploaded
const router = require('express').Router()
const controller = require('../controllers/user')
const middleware = require('../middleware')

router.post('/signin', controller.signin)
router.post('/register', controller.register)
router.get(
  '/session',
  middleware.striptoken,
  middleware.verifyToken,
  controller.checkSession
)
module.exports = router
