import { getLanguage } from "./api/getLanguage.js"
import { postNewLanguage } from './api/postNewLanguage.js'
import { template, addCard, input, container, buttons } from './components/languageTemplates.js'

const content = document.querySelector('.content')

export default function render(data) {
    content.innerHTML = ''


    data.languages.forEach((element, i) => {
        content.innerHTML += template(element.title, element.short, element.name)
    })

    content.innerHTML += addCard()

    document.querySelector('.addCard').onclick = () => {
        createLanguage()
    }
}

function createLanguage() {
    content.innerHTML = container()

    const languageTitle = document.querySelector('.languageTitle')
    const languageHeader = document.querySelector('.languageHeader')
    const controllers = document.querySelector('.controllers')

    languageTitle.innerHTML += input('Язык', 'titleKey')
    languageTitle.innerHTML += input('Краткое название', 'shortKey')
    languageTitle.innerHTML += input('Перевод языка', 'nameKey')

    languageHeader.innerHTML += input('Чат', 'chatKey')
    languageHeader.innerHTML += input('Контакты', 'contactsKey')
    languageHeader.innerHTML += input('Правила', 'rulesKey')

    controllers.innerHTML += buttons()

    document.querySelector('#backButton').onclick = () => {
        getLanguage()
    }

    document.querySelector('#saveButton').onclick = () => {
        const title = document.querySelector('#titleKey').value
        const short = document.querySelector('#shortKey').value
        const name = document.querySelector('#nameKey').value

        const chat = document.querySelector('#chatKey').value
        const contacts = document.querySelector('#contactsKey').value
        const rules = document.querySelector('#rulesKey').value

        postNewLanguage(title, short, name, contacts, rules, chat)
    }
}