const router = require('express').Router()
const controller = require('../controllers/home')
const middleware = require('../middleware')

router.post('/index', controller.index)

module.exports = router
