export function template(title, short, name) {
    return `
        <div class="card">
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

export function container() {
    return `
        <div class="settingsBlock">
            <p class="title">Общая информация</p>
            <div class="languageTitle"></div>
        </div>
        <div class="settingsBlock">
            <p class="title">Шапка сайта</p>
            <div class="languageHeader"></div>
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