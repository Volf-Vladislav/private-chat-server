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
    description: {
        type: String,
        required: true,
    },
    chatTitle: {
        type: String,
        required: true,
    },
    keywords: {
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
    innerHeader: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        button: {
            type: String,
            required: true,
        },
    },
    advantages: {
        title: {
            type: String,
            required: true,
        },
        innerTitle: {
            type: String,
            required: true,
        },
        text1: {
            type: String,
            required: true,
        },
        text2: {
            type: String,
            required: true,
        },
        text3: {
            type: String,
            required: true,
        },
        text4: {
            type: String,
            required: true,
        }
    },
    features: {
        title: {
            type: String,
            required: true,
        },
        innerTitle: {
            type: String,
            required: true,
        },
        text1: {
            type: String,
            required: true,
        },
        text2: {
            type: String,
            required: true,
        },
        text3: {
            type: String,
            required: true,
        },
    },
    contactsBlock: {
        contact: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        purpose: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        send: {
            type: String,
            required: true,
        },
    },
    rulesBlock: {
        content: {
            type: String,
            required: true,
        }
    },
    chatBlock: {
        exit: {
            type: String,
            required: true,
        },
        userGender: {
            type: String,
            required: true,
        },
        penPalGender: {
            type: String,
            required: true,
        },
        any: {
            type: String,
            required: true,
        },
        male: {
            type: String,
            required: true,
        },
        female: {
            type: String,
            required: true,
        },
        back: {
            type: String,
            required: true,
        },
        search: {
            type: String,
            required: true,
        },
        stop: {
            type: String,
            required: true,
        },
        endCall: {
            type: String,
            required: true,
        },
        nextChat: {
            type: String,
            required: true,
        },
        report: {
            type: String,
            required: true,
        }
    }
})

module.exports = model('Language', Language)