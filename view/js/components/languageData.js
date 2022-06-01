import { input, textArea } from './languageTemplates.js'

export function dataToView(data, component) {
    const content = document.querySelector(`.${component}`)

    data.forEach(element => {
        if (element.type == 'area') {
            content.innerHTML += textArea(element.value, element.key)
        }
        else {
            content.innerHTML += input(element.value, element.key)
        }
    })
}

export const languageData = {
    languageTitle: [{
        value: 'Язык',
        key: 'title',
        type: 'input',
    },
    {
        value: 'Краткое название',
        key: 'short',
        type: 'input',
    },
    {
        value: 'Перевод языка',
        key: 'name',
        type: 'input',
    }],
    languageMeta: [{
        value: 'title',
        key: 'chatTitle',
        type: 'input',
    },
    {
        value: 'description',
        key: 'description',
        type: 'input'
    },
    {
        value: 'keywords',
        key: 'keywords',
        type: 'input'
    }],
    languageHeader: [{
        value: 'Чат',
        key: 'chat',
        type: 'input',
    },
        {
            value: 'Контакты',
            key: 'contacts',
            type: 'input',
        },
        {
            value: 'Правила',
            key: 'rules',
            type: 'input',
        }],
    innerHeader: [{
        value: 'Бесплатный анонимный чат без регистрации',
        key: 'title',
        type: 'area',
    },
        {
            value: 'Этот бесплатный онлайн-чат – функция анонимной социальной сети. Пользователи могут публиковать свои сообщения, набирая текст. Уникальным преимуществом данного чата является то, что он полностью анонимен, и пользователям нет необходимости регистрироваться при присоединении. Новый чат без регистрации обладает надежной системой, сохраняющей полную анонимность пользователя как при текстовом, так и при голосовом общении.',
            key: 'content',
            type: 'area',
        },
        {
            value: 'Перейти В Чат',
            key: 'button',
            type: 'area',
        }],
    advantages: [{
        value: 'Преимущества чата',
        key: 'title',
        type: 'area',
    },
        {
            value: 'Функция анонимного чата имеет следующие преимущества',
            key: 'innerTitle',
            type: 'area',
        },
        {
            value: 'Посетители делятся личными секретами без рисков и опасений, что делает атмосферу в чате максимально свободной и открытой',
            key: 'text1',
            type: 'area',
        },
        {
            value: 'Посетители делятся личными секретами без рисков и опасений, что делает атмосферу в чате максимально свободной и открытой',
            key: 'text2',
            type: 'area',
        },
        {
            value: 'Безопасность общения, которую гарантирует анонимность пользователя',
            key: 'text3',
            type: 'area',
        },
        {
            value: 'Заходите в анонимный чат бесплатно и общайтесь, не опасаясь ничего.',
            key: 'text4',
            type: 'area',
        }],
    features: [{
        value: 'Особенности Чата',
        key: 'title',
        type: 'area',
    }, {
        value: 'Что отличает данный анонимный чат от других социальных сетей? Дело в том, что участники общения не идентифицируются при использовании сервиса, здесь нет подписчиков и друзей. Приложение не запрашивает фотографии или адреса электронной почты, хотя вы можете предоставить эти данные по собственному желанию. Пользователи не могут применять функцию поиска для того, чтобы найти других пользователей. Все это гарантирует посетителям чата практически полную анонимность и абсолютную безопасность, что невозможно получить в других соцсетях',
        key: 'innerTitle',
        type: 'area',
    }, {
        value: 'Несмотря на то, что общаться в чате можно без регистрации, предусмотрена возможность зарегистрироваться добровольно. В этои случае пользователь должен создать пароль длиной от шести символов, включающий в себя латинские буквы и цифры.',
        key: 'text1',
        type: 'area',
    }, {
        value: 'Как для зарегистрированных, так и для незарегистрированных пользователей посещение чата бесплатное.',
        key: 'text2',
        type: 'area',
    }, {
        value: 'Основной способ общения с кем-то в данной соцсети – отвечать на сообщения собеседника, используя анонимный текстовой чат или голосовой диалог. Это можно сделать через функцию чата в любое время суток.',
        key: 'text3',
        type: 'area',
    }],
    contactsBlock: [{
        value: 'Контакты',
        key: 'contact',
        type: 'input',
    },
        {
            value: 'Вы можете с нами связаться через форму обратной связи',
            key: 'text',
            type: 'area',
        },
        {
            value: 'Наш e-mail',
            key: 'email',
            type: 'input',
        },

        {
            value: 'Ваше имя',
            key: 'name',
            type: 'input',
        },
        {
            value: 'Тема обращения',
            key: 'purpose',
            type: 'input',
        },
        {
            value: 'Ваше сообщение',
            key: 'message',
            type: 'input',
        },
        {
            value: 'Отправить',
            key: 'send',
            type: 'input',
        }],
    rulesBlock: [{
        value: 'Все правила сайта',
        key: 'content',
        type: 'area',
    }],
    chatBlock: [{
        value: 'Выйти',
        key: 'exit',
        type: 'input',
    },
    {
        value: 'надпись "Ваш пол"',
        key: 'userGender',
        type: 'input',
    },
    {
        value: 'надпись "Пол собеседника"',
        key: 'penPalGender',
        type: 'input',
    },
    {
        value: 'кнопка выбора "не важно"',
        key: 'any',
        type: 'input',
    },
    {
        value: 'кнопка выбора "мужской"',
        key: 'male',
        type: 'input',
    },
    {
        value: 'кнопка выбора "женский"',
        key: 'female',
        type: 'input',
    },
    {
        value: 'кнопка "Вернутся назад"',
        key: 'back',
        type: 'input',
    },
    {
        value: 'кнопка "Начать поиск"',
        key: 'search',
        type: 'input',
    },
    {
        value: 'кнопка "Отменить"',
        key: 'stop',
        type: 'input',
    },
    {
        value: 'кнопка "Закончить беседу"',
        key: 'endCall',
        type: 'input',
    },
    {
        value: 'кнопка "Следующая беседа"',
        key: 'nextChat',
        type: 'input',
    },
    {
        value: 'кнопка "Отправить жалобу"',
        key: 'report',
        type: 'input',
    }]
}