const { Schema, model } = require('mongoose')

const Language = new Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
    },
    header: {
        contacts: {
            type: String,
            required: true,
        },
        rules: {
            type: String,
            required: true,
        },
        chat: {
            type: String,
            required: true,
        }
    },
})

module.exports = model('Language', Language)