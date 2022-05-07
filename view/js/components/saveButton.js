import { getLanguage } from "../api/getLanguage.js"
import { postNewLanguage } from '../api/postNewLanguage.js'
import { languageData } from "./languageData.js"

export function saveButton() {
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

        postNewLanguage(result)
    }
}