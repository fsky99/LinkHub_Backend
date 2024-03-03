const express = require('express')
const router = express.Router()
const middleware = require('../middleware')

const userCtrl = require('../controllers/user')

router.post('/signin', userCtrl.signin)
router.post('/register', userCtrl.register)

router.get(
  '/session',
  middleware.striptoken,
  middleware.verifyToken,
  userCtrl.checkSession
)


router.get('/', userCtrl.findAllUsers)
router.get('/:id', userCtrl.findUser)
router.post('/', userCtrl.createUser)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router
