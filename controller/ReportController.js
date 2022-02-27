const tokenService = require('../service/TokenService')
const ReportedUser = require('../model/ReportedUser')

class ReportController {
    async getUsers(req, res) {
        try {
            const reportedUser = await ReportedUser.find()
            res.json({ users: reportedUser })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }
    async postReport(req, res) {
        try {
            const { userIP, messages } = req.body

            const user = await ReportedUser.findOne({ userIP: userIP })
            if (user) {
                user.reports = user.reports + 1
                user.messages.push(messages)
                await user.save()
            }
            else {
                const reportedUser = new ReportedUser({ messages: messages, userIP: userIP })
                await reportedUser.save()
            }

            res.json('Жалоба была отправлена!')
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }
    async checkBan(req, res) {
        try {
            const { userIP } = req.body

            const user = await ReportedUser.findOne({ userIP: userIP })

            if (!user) {
                return res.json({ message: 'false', reason: 'not found' })
            }

            if (user.status == 'banned') {
                const date = user.banTime
                const dateNow = new Date()
                const dateNowTS = Date.parse(dateNow) / 1000

                if (dateNowTS >= date) {
                    user.status = 'disBan'
                    user.reports = 0
                    return res.json({ message: 'false'})
                }
                else res.json({ message: 'true', reason: user.banReason, time: user.banTime })
            }
            else {
                res.json({ message: 'false' })
            }
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }

    async createBan(req, res) {
        try {
            const { userIP, reason, time } = req.body

            const token = req.headers.authorization.split('Bearer ')[1]

            if (!token) return res.status(403).json({ message: 'Доступ запрешен!' })

            const tokenPayload = tokenService.decodeToken(token)
            if (tokenPayload.role == 'MODERATOR') {

                const user = await ReportedUser.findOne({ userIP: userIP })

                if (user) {
                    const date = new Date()
                    const hoursInMSeconds = parseInt(60 * 60)

                    user.status = 'banned'
                    user.banReason = reason
                    user.banTime = Date.parse(date) / 1000 + hoursInMSeconds * time
                    await user.save()

                    res.json({ message: 'Пользователь был забанен' })
                }
                else res.json({ message: 'Ошибка: Пользователь был удален' })
            }

            else return res.json({ message: 'Ошибка доступа' })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }
}


module.exports = new ReportController()