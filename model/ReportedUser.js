const { Schema, model } = require('mongoose')

const ReportedUser = new Schema({
    userIP: {
        type: String,
        required: true,
    },
    reports: {
        type: Number,
        default: 1
    },
    banReason: {
        type: String,
        default: 'Спам'
    },
    banTime: {
        type: String,
    },
    status: {
        type: String,
        default: 'inProcess',
    },
    messages: {
        type: Array
    }
})

module.exports = model('ReportedUser', ReportedUser)