const User = require('../model/User')
const bcrypt = require('bcryptjs')
const tokenService = require('../service/TokenService')

class AuthController {
    async login(req, res) {
        try {
            const { login, password } = req.body

            const user = await User.findOne({ login })
            if (!user) return res.status(400).json({ message: 'Пользователь не найден' })

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) return res.status(400).json({ message: 'Неверный пароль' })

            const token = tokenService.generateToken(user._id, user.role)
            res.status(200).json({ message: 'Успешно', token: token })
        }

        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }
}

module.exports = new AuthController()