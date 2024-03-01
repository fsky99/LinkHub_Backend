// this is just so that the folder can be uploaded
const router = require('express').Router()
const controller = require('../controllers/user')
const middleware = require('../middleware')

router.post('/login', controller.login)
router.post('/register', controller.register)

module.exports = router
