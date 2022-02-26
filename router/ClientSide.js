const Router = require('express').Router
const ClientController = require('../controller/ClientController')

const router = new Router()

router.get('/', ClientController.mainPage)
router.get('/auth', ClientController.authorization)

module.exports = router