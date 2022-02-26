import { rootUrl } from './rootUrl.js'
import { createUsers } from './../templates.js'

export async function getUsers() {
    const url = rootUrl + '/api/report/getusers'

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const serverData = await response.json()
        createUsers(serverData)
    }
    catch (err) {
        console.log(err)
    }
}