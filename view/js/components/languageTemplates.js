export function template(title, short, name, id) {
    return `
        <div class="card" id=${id}>
            <p>Язык <span>${title}</span></p>
            <p>Краткое название <span>${short}</span></p>
            <p>Перевод <span>${name}</span></p>
        </div>
    `
}

export function addCard() {
    return `
        <div class="card addCard">
            <i class="material-icons prefix">add</i>
        </div>
    `
}

export function input(title, key) {
    return `
        <div class="languageInput">
            <p>${title}</p>
            <input id="${key}" type="text">
        </div>
    `
}

export function textArea(title, key) {
    return `
        <div class="languageInput">
            <p>${title}</p>
            <textarea cols="40" rows="5" id="${key}"></textarea>
        </div>
    `
}

export function container() {
    return `
        <div class="settingsBlock">
            <p class="title">Общая информация</p>
            <div class="languageTitle"></div>
        </div>
        <div class="settingsBlock">
            <p class="title">Мета теги</p>
            <div class="languageMeta"></div>
        </div>
        <div class="settingsBlock">
            <p class="title">Шапка сайта</p>
            <div class="languageHeader"></div>
        </div>
        <div class="settingsBlock">
            <p class="title">inner header сайта</p>
            <div class="innerHeader"></div>
        </div>
        <div class="settingsBlock">
            <p class="title">Блок с преимуществами чата</p>
            <div class="advantages"></div>
        </div>
        <div class="settingsBlock">
            <p class="title">Блок с особенностями чата</p>
            <div class="features"></div>
        </div>

        <div class="settingsBlock">
            <p class="title">Блок с контактами
            <div class="contactsBlock"></div>
        </div>
        <div class="settingsBlock">
            <p class="title">Блок с правилами</p>
            <div class="rulesBlock"></div>
        </div>
        <div class="settingsBlock">
            <p class="title">Перевод чата</p>
            <div class="chatBlock"></div>
        </div>
        <div class="settingsBlock">
            <div class="controllers"></div>
        </div>
    `
}

export function buttons() {
    return `
        <div class='contollers'>
            <a class="waves-effect right waves-light btn" id='backButton'><i class="material-icons left">chevron_left</i>назад</a>
            <a class="waves-effect right waves-light btn" id='saveButton'><i class="material-icons right">check</i>сохранить</a>
        </div>
        `
}