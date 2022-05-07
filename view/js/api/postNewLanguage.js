import { readCookie } from './readCookie.js'
import { rootUrl } from './rootUrl.js'

export async function postNewLanguage(data) {
    const url = rootUrl + '/api/language/createLanguage'
    const token = readCookie('token')

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        })

        const serverData = await response.json()
        alert(serverData.message)

    }
    catch (err) {
        console.log(err)
    }
}