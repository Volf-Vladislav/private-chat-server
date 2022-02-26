const Router = require('express').Router
const AuthController = require('../controller/AuthController')

const router = new Router()

router.post('/login', AuthController.login)

module.exports = router