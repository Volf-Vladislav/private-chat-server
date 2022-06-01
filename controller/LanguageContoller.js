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

    async postLanguage(req, res) {
        try {
            const token = req.headers.authorization.split('Bearer ')[1]
            if (!token) return res.status(403).json({ message: 'Доступ запрешен!' })

            const tokenPayload = tokenService.decodeToken(token)
            if (!tokenPayload.role == 'MODERATOR') return res.status(403).json({ message: 'Нет доступа' })

            const { languageTitle, languageHeader, innerHeader, languageMeta } = req.body
            const { advantages, features, contactsBlock, rulesBlock, chatBlock } = req.body
            const id = req.body.id

            const language = new Language({
                title: languageTitle.title,
                short: languageTitle.short,
                name: languageTitle.name,
                chatTitle: languageMeta.chatTitle,
                description: languageMeta.description,
                keywords: languageMeta.keywords,
                header: {
                    contacts: languageHeader.contacts,
                    rules: languageHeader.rules,
                    chat: languageHeader.chat
                },
                innerHeader: {
                    title: innerHeader.title,
                    content: innerHeader.content,
                    button: innerHeader.button,
                },
                advantages: {
                    title: advantages.title,
                    innerTitle: advantages.innerTitle,
                    text1: advantages.text1,
                    text2: advantages.text2,
                    text3: advantages.text3,
                    text4: advantages.text4,
                },
                features: {
                    title: features.title,
                    innerTitle: features.innerTitle,
                    text1: features.text1,
                    text2: features.text2,
                    text3: features.text3,
                },
                contactsBlock: {
                    contact: contactsBlock.contact,
                    text: contactsBlock.text,
                    email: contactsBlock.email,
                    name: contactsBlock.name,
                    purpose: contactsBlock.purpose,
                    message: contactsBlock.message,
                    send: contactsBlock.send,
                },
                rulesBlock: { content: rulesBlock.content },
                chatBlock: {
                    exit: chatBlock.exit,
                    userGender: chatBlock.userGender,
                    penPalGender: chatBlock.penPalGender,
                    any: chatBlock.any,
                    male: chatBlock.male,
                    female: chatBlock.female,
                    back: chatBlock.back,
                    search: chatBlock.search,
                    stop: chatBlock.stop,
                    endCall: chatBlock.endCall,
                    nextChat: chatBlock.nextChat,
                    report: chatBlock.report
                }
            })

            await language.save()
                .then(() => {
                    if (id) {
                        Language.findOne({ _id: id }).remove( () => {
                            return res.status(201).json({ message: 'Язык изменен' })
                        })
                    }
                    else return res.status(201).json({ message: 'Язык создан' })
                })
                .catch((err) => {
                    console.log(err)
                    return res.status(400).json({ message: 'Заполните все поля' })
                })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }
}

module.exports = new LanguageContoller()