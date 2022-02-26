const { Schema, model } = require('mongoose')

const User = new Schema({
    username: {
        type: String,
        default: 'Модератор'
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'MODERATOR'
    }
})

module.exports = model('User', User)