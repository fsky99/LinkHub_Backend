const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')
const middleware = require('../middleware')

const userCtrl = require('../controllers/user')

router.get('/', userCtrl.findAllUsers)
router.get('/:id', userCtrl.findUser)
router.post('/', userCtrl.createUser)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

router.post('/signin', controller.signin)
router.post('/register', controller.register)
router.get(
  '/session',
  middleware.striptoken,
  middleware.verifyToken,
  controller.checkSession
)
module.exports = router
