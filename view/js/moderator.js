import { getLanguage } from "./api/getLanguage.js"
import { getUsers } from "./api/getUsers.js"

if(window.location.pathname == '/translation') {
    getLanguage()
}

else if(window.location.pathname == '/') {
    getUsers()
}

