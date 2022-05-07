const Router = require('express').Router
const LanguageContoller = require('../controller/LanguageContoller')

const router = new Router()

router.get('/getlanguage', LanguageContoller.getLanguage)
router.post('/createLanguage', LanguageContoller.postLanguage)

module.exports = router