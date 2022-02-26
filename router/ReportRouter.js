const Router = require('express').Router
const ReportController = require('../controller/ReportController')

const router = new Router()

router.get('/getusers', ReportController.getUsers)
router.post('/postreport', ReportController.postReport)
router.post('/isbanned', ReportController.checkBan)
router.post('/banuser', ReportController.createBan)

module.exports = router