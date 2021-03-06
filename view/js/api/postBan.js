import { readCookie } from './readCookie.js'
import { rootUrl } from './rootUrl.js'

export async function postBan(userIP, reason, time) {
    const url = rootUrl + '/api/report/banuser'
    const token = readCookie('token')

    const data = {
        userIP: userIP,
        reason: reason,
        time: time
    }

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