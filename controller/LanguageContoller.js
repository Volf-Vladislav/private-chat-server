const Language = require('../model/Language')
const tokenService = require('../service/TokenService')

class LanguageContoller {
    async getLanguage(req, res) {

        try {
            const languages = await Language.find()
            res.json({ languages })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }

    async getTranslate(req, res) {
        try {
            const short = req.body.short

            const language = await Language.findOne({ short: short })
            
            if (!language) {
                const defaultLanguage = await Language.findOne({ short: 'en-US' })
                return res.json({ language: defaultLanguage })
            }
            res.json({ language })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }

    async postLanguage(req, res) {
        try {
            const token = req.headers.authorization.split('Bearer ')[1]
            if (!token) return res.status(403).json({ message: 'Доступ запрешен!' })

            const tokenPayload = tokenService.decodeToken(token)
            if (!tokenPayload.role == 'MODERATOR') return res.status(403).json({ message: 'Нет доступа' })

            const { contacts, rules, chat } = req.body
            const { title, short, name } = req.body

            const language = new Language({
                title: title,
                short: short,
                name: name,
                header: {
                    contacts: contacts,
                    rules: rules,
                    chat: chat
                }
            })

            await language.save()
                .then(() => {
                    res.status(201).json({ message: 'Язык создан' })
                })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }
}

module.exports = new LanguageContoller()