const tokenService = require('../service/TokenService')

class ClientController {
    async main(req, res) {
        const token = tokenService.getCookieToken(req)

        if (token) {
            const tokenPayload = tokenService.decodeToken(token)
            if (tokenPayload.role) {
                if (tokenPayload.role === 'MODERATOR') {
                    res.render('main')
                }
                else {
                    res.redirect('/auth')
                }
            }
        }

        else {
            res.redirect('/auth')
        }
    }

    authorization(req, res) {
        const token = tokenService.getCookieToken(req)

        if (token) {
            const tokenPayload = tokenService.decodeToken(token)
            if (tokenPayload.role === 'ADMIN' || tokenPayload.role === 'MODERATOR') {
                res.redirect('/')
            }
        }
        else {
            res.render('authorization')
        }
    }

    async translation(req, res) {
        const token = tokenService.getCookieToken(req)

        if (token) {
            const tokenPayload = tokenService.decodeToken(token)
            if (tokenPayload.role) {
                if (tokenPayload.role === 'MODERATOR') {
                    res.render('translation')
                }
                else {
                    res.redirect('/auth')
                }
            }
        }

        else {
            res.redirect('/auth')
        }
    }
}

module.exports = new ClientController()