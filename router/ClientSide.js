const Router = require('express').Router
const ClientController = require('../controller/ClientController')

const router = new Router()

router.get('/', ClientController.main)
router.get('/auth', ClientController.authorization)
router.get('/translation', ClientController.translation)

module.exports = router