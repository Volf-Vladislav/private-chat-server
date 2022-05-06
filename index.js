const express = require('express')
const mongoose = require('mongoose')

const cons = require('consolidate')
const path = require('path')
var cors = require('cors')

const authRouter = require('./router/AuthRouter')
const clientSide = require('./router/ClientSide')
const reportRouter = require('./router/ReportRouter')
const languageRouter = require('./router/LanguageRouter')

const app = express()
app.use(cors())
const PORT = process.env.PORT || 8000

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'view/html'))
app.set('view engine', 'html')
app.use(express.static(__dirname + '/view'))

app.use(express.json())

app.use('/', clientSide)
app.use(('/api/auth'), authRouter)
app.use(('/api/report'), reportRouter)
app.use(('/api/language'), languageRouter)

async function start() {
    const DBUrl = 'mongodb://admin:admin@cluster0-shard-00-00.wvp5x.mongodb.net:27017,cluster0-shard-00-01.wvp5x.mongodb.net:27017,cluster0-shard-00-02.wvp5x.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-9zemic-shard-0&authSource=admin&retryWrites=true&w=majority'
    try {
        app.listen(PORT, () => {
            console.log('Server started on port ' + PORT)
        })

        await mongoose.connect(DBUrl)
    }
    catch(err) {
        console.log(err)
    }
}

start()