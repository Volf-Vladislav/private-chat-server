import { dataToView, languageData } from './components/languageData.js'

import {
    template,
    addCard,
    container,
    buttons,
} from './components/languageTemplates.js'

import { saveButton } from './components/saveButton.js'

export default function render(data) {
    const content = document.querySelector('.content')
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
    const content = document.querySelector('.content')
    content.innerHTML = container()

    const controllers = document.querySelector('.controllers')

    dataToView(languageData.languageTitle, 'languageTitle')
    dataToView(languageData.languageHeader, 'languageHeader')
    dataToView(languageData.innerHeader, 'innerHeader')
    dataToView(languageData.advantages, 'advantages')
    dataToView(languageData.features, 'features')
    dataToView(languageData.contactsBlock, 'contactsBlock')
    dataToView(languageData.rulesBlock, 'rulesBlock')

    controllers.innerHTML += buttons()

    saveButton()
}