import { rootUrl } from './rootUrl.js'
import render from './../language.js'


export async function getLanguage() {
    const url = rootUrl + '/api/language/getlanguage'

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const serverData = await response.json()
        render(serverData)
    }
    catch (err) {
        console.log(err)
    }
}