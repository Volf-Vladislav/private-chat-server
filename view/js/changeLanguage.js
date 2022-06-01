import { getLanguage } from "./api/getLanguage.js"
import { postNewLanguage } from "./api/postNewLanguage.js"
import { languageData } from "./components/languageData.js"

export function renderNewCard(data) {
    const cards = document.getElementsByClassName('card')

    const array = [...cards]

    array.forEach(element => {
        if (element.id) {
            element.onclick = () => {
                render(element.id, data)
            }
        }
    })

}

function render(id, data) {
    const content = document.querySelector('.content')
    content.innerHTML = gavnocode(data.languages.find(item => item._id == id))

    document.querySelector('#backButton').onclick = () => {
        getLanguage()
    }

    document.querySelector('#saveButton').onclick = () => {
        let result = {}
        let obj = {}

        for (var key in languageData) {
            languageData[key].forEach(element => {

                const value = document.querySelector(`.${key}`)
                let temp = value.querySelector(`#${element.key}`).value
                obj[`${element.key}`] = temp
            })

            result[`${key}`] = obj
            obj = {}
        }
        result.id = id
        console.log(result)

        postNewLanguage(result, id)
    }
}

function gavnocode(data) {
    return (`
        <div class="content">
        <div class="settingsBlock">
            <p class="title">Общая информация</p>
            <div class="languageTitle">
        <div class="languageInput">
            <p>Язык</p>
            <input id="title" type="text" value="${data.title}">
        </div>
    
        <div class="languageInput">
            <p>Краткое название</p>
            <input id="short" type="text" value="${data.short}">
        </div>
    
        <div class="languageInput">
            <p>Перевод языка</p>
            <input id="name" type="text" value="${data.name}">
        </div>
    </div>
        </div>
        <div class="settingsBlock">
            <p class="title">Мета теги</p>
            <div class="languageMeta">
        <div class="languageInput">
            <p>title</p>
            <input id="chatTitle" type="text" value="${data.chatTitle}">
        </div>
    
        <div class="languageInput">
            <p>description</p>
            <input id="description" type="text" value="${data.description}">
        </div>
    
        <div class="languageInput">
            <p>keywords</p>
            <input id="keywords" type="text" value="${data.keywords}">
        </div>
    </div>
        </div>
        <div class="settingsBlock">
            <p class="title">Шапка сайта</p>
            <div class="languageHeader">
        <div class="languageInput">
            <p>Чат</p>
            <input id="chat" type="text" value="${data.header.chat}">
        </div>
    
        <div class="languageInput">
            <p>Контакты</p>
            <input id="contacts" type="text" value="${data.header.contacts}">
        </div>
    
        <div class="languageInput">
            <p>Правила</p>
            <input id="rules" type="text" value="${data.header.rules}">
        </div>
    </div>
        </div>
        <div class="settingsBlock">
            <p class="title">inner header сайта</p>
            <div class="innerHeader">
        <div class="languageInput">
            <p>Бесплатный анонимный чат без регистрации</p>
            <textarea cols="40" rows="10" id="title">${data.innerHeader.title}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Этот бесплатный онлайн-чат – функция анонимной социальной сети. Пользователи могут публиковать свои сообщения, набирая текст. Уникальным преимуществом данного чата является то, что он полностью анонимен, и пользователям нет необходимости регистрироваться при присоединении. Новый чат без регистрации обладает надежной системой, сохраняющей полную анонимность пользователя как при текстовом, так и при голосовом общении.</p>
            <textarea cols="40" rows="10" id="content">${data.innerHeader.content}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Перейти В Чат</p>
            <textarea cols="40" rows="10" id="button">${data.innerHeader.button}</textarea>
        </div>
    </div>
        </div>
        <div class="settingsBlock">
            <p class="title">Блок с преимуществами чата</p>
            <div class="advantages">
        <div class="languageInput">
            <p>Преимущества чата</p>
            <textarea cols="40" rows="10" id="title">${data.advantages.title}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Функция анонимного чата имеет следующие преимущества</p>
            <textarea cols="40" rows="10" id="innerTitle">${data.advantages.innerTitle}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Посетители делятся личными секретами без рисков и опасений, что делает атмосферу в чате максимально свободной и открытой</p>
            <textarea cols="40" rows="10" id="text1">${data.advantages.text1}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Посетители делятся личными секретами без рисков и опасений, что делает атмосферу в чате максимально свободной и открытой</p>
            <textarea cols="40" rows="5" id="text2">${data.advantages.text2}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Безопасность общения, которую гарантирует анонимность пользователя</p>
            <textarea cols="40" rows="5" id="text3">${data.advantages.text3}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Заходите в анонимный чат бесплатно и общайтесь, не опасаясь ничего.</p>
            <textarea cols="40" rows="5" id="text4">${data.advantages.text4}</textarea>
        </div>
    </div>
        </div>
        <div class="settingsBlock">
            <p class="title">Блок с особенностями чата</p>
            <div class="features">
        <div class="languageInput">
            <p>Особенности Чата</p>
            <textarea cols="40" rows="5" id="title">${data.features.title}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Что отличает данный анонимный чат от других социальных сетей? Дело в том, что участники общения не идентифицируются при использовании сервиса, здесь нет подписчиков и друзей. Приложение не запрашивает фотографии или адреса электронной почты, хотя вы можете предоставить эти данные по собственному желанию. Пользователи не могут применять функцию поиска для того, чтобы найти других пользователей. Все это гарантирует посетителям чата практически полную анонимность и абсолютную безопасность, что невозможно получить в других соцсетях</p>
            <textarea cols="40" rows="5" id="innerTitle">${data.features.innerTitle}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Несмотря на то, что общаться в чате можно без регистрации, предусмотрена возможность зарегистрироваться добровольно. В этои случае пользователь должен создать пароль длиной от шести символов, включающий в себя латинские буквы и цифры.</p>
            <textarea cols="40" rows="5" id="text1">${data.features.text1}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Как для зарегистрированных, так и для незарегистрированных пользователей посещение чата бесплатное.</p>
            <textarea cols="40" rows="5" id="text2">${data.features.text2}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Основной способ общения с кем-то в данной соцсети – отвечать на сообщения собеседника, используя анонимный текстовой чат или голосовой диалог. Это можно сделать через функцию чата в любое время суток.</p>
            <textarea cols="40" rows="5" id="text3">${data.features.text3}</textarea>
        </div>
    </div>
        </div>

        <div class="settingsBlock">
            <p class="title">Блок с контактами
            </p><div class="contactsBlock">
        <div class="languageInput">
            <p>Контакты</p>
            <input id="contact" type="text" value="${data.contactsBlock.contact}">
        </div>
    
        <div class="languageInput">
            <p>Вы можете с нами связаться через форму обратной связи</p>
            <textarea cols="40" rows="5" id="text">${data.contactsBlock.text}</textarea>
        </div>
    
        <div class="languageInput">
            <p>Наш e-mail</p>
            <input id="email" type="text" value="${data.contactsBlock.email}">
        </div>
    
        <div class="languageInput">
            <p>Ваше имя</p>
            <input id="name" type="text" value="${data.contactsBlock.name}">
        </div>
    
        <div class="languageInput">
            <p>Тема обращения</p>
            <input id="purpose" type="text" value="${data.contactsBlock.purpose}">
        </div>
    
        <div class="languageInput">
            <p>Ваше сообщение</p>
            <input id="message" type="text" value="${data.contactsBlock.message}">
        </div>
    
        <div class="languageInput">
            <p>Отправить</p>
            <input id="send" type="text" value="${data.contactsBlock.send}">
        </div>
    </div>
        </div>
        <div class="settingsBlock">
            <p class="title">Блок с правилами</p>
            <div class="rulesBlock">
        <div class="languageInput">
            <p>Все правила сайта</p>
            <textarea cols="40" rows="5" id="content">${data.rulesBlock.content}</textarea>
        </div>
    </div>
        </div>
        <div class="settingsBlock">
            <p class="title">Перевод чата</p>
            <div class="chatBlock">
        <div class="languageInput">
            <p>Выйти</p>
            <input id="exit" type="text" value="${data.chatBlock.exit}">
        </div>
    
        <div class="languageInput">
            <p>надпись "Ваш пол"</p>
            <input id="userGender" type="text" value="${data.chatBlock.userGender}">
        </div>
    
        <div class="languageInput">
            <p>надпись "Пол собеседника"</p>
            <input id="penPalGender" type="text" value="${data.chatBlock.penPalGender}">
        </div>
    
        <div class="languageInput">
            <p>кнопка выбора "не важно"</p>
            <input id="any" type="text" value="${data.chatBlock.any}">
        </div>
    
        <div class="languageInput">
            <p>кнопка выбора "мужской"</p>
            <input id="male" type="text" value="${data.chatBlock.male}">
        </div>
    
        <div class="languageInput">
            <p>кнопка выбора "женский"</p>
            <input id="female" type="text" value="${data.chatBlock.female}">
        </div>
    
        <div class="languageInput">
            <p>кнопка "Вернутся назад"</p>
            <input id="back" type="text" value="${data.chatBlock.back}">
        </div>
    
        <div class="languageInput">
            <p>кнопка "Начать поиск"</p>
            <input id="search" type="text" value="${data.chatBlock.search}">
        </div>
    
        <div class="languageInput">
            <p>кнопка "Отменить"</p>
            <input id="stop" type="text" value="${data.chatBlock.stop}">
        </div>
    
        <div class="languageInput">
            <p>кнопка "Закончить беседу"</p>
            <input id="endCall" type="text" value="${data.chatBlock.endCall}">
        </div>
    
        <div class="languageInput">
            <p>кнопка "Следующая беседа"</p>
            <input id="nextChat" type="text" value="${data.chatBlock.nextChat}">
        </div>
    
        <div class="languageInput">
            <p>кнопка "Отправить жалобу"</p>
            <input id="report" type="text" value="${data.chatBlock.report}">
        </div>
    </div>
        </div>
        <div class="settingsBlock">
            <div class="controllers">
        <div class="contollers">
            <a class="waves-effect right waves-light btn" id="backButton"><i class="material-icons left">chevron_left</i>назад</a>
            <a class="waves-effect right waves-light btn" id="saveButton"><i class="material-icons right">check</i>сохранить</a>
        </div>
        </div>
        </div>
    </div>
    `)
}   