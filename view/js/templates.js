import { postBan } from "./api/postBan.js"

function cardTemplate(adress, reports, id) {
    return (
        `
        <div class="card" id="${id}">
            <p>IP адрес <span>${adress}</span></p>
            <p>Кол-во репортов <span>${reports}</span></p>
            <p>Статус <span>В процессе</span></p>
        </div>
        `
    )
}

function usertemlate(message) {
    return (
        `
        <div class="message">
            <p>${message}<p>
        </div>
        `
    )
}

function buttons() {
    return (
        `     
        <div class="uiElements">           
            <a class="waves-effect right waves-light btn" onclick="window.location.reload()"><i
            class="material-icons left">arrow_back</i>назад</a>

            <div class="input-field col s12">
                <i class="material-icons prefix">assignment</i>
                <label for="icon_telephone" style="height: 0;">Причина</label>
                <input id="reason" type="text">
            </div>

            
            <div class="input-field col s12">
                <i class="material-icons prefix">access_time</i>
                <label for="icon_telephone" style="height: 0;">Время бана(часы)</label>
                <input id="time" type="text">
            </div>

            <a class="waves-effect waves-light btn" id="banButton"><i
            class="material-icons right">close</i>Забанить</a>
        </div>
        `
    )
}

export function createUsers(data) {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    data.users.forEach(element => {
        if(element.status  == 'inProcess') {
            content.innerHTML += cardTemplate(element.userIP, element.reports, element.id)
            const button = document.querySelector(`#${element.id}`)
            button.onclick = () => {
                createUser(element.messages, element.userIP)
            }
        }
    })
}

function createUser(messages, adress) {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    content.innerHTML += buttons()

    messages.forEach(element => {
        content.innerHTML += usertemlate(element)
    })

    const banButton = document.querySelector('#banButton')
    banButton.onclick = () => {
        const time = document.querySelector('#time')
        const reason = document.querySelector('#reason')

        postBan(adress, reason.value, time.value)
    }
}