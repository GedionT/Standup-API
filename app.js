const express     = require('express')
const logger      = require('morgan')
const bodyParser  = require('body-parser')
const cors        = require('cors')
const api = require('./api')

const app = express()

app.set('port', (process.env.PORT || 8081))

// middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('static'))
app.use(cors())

// route
app.use('/api', api)

// error-handler
app.use((req, res) => {
    const err = new Error('Not found')
    err.status = 404
    res.json(err)
})

// listen to server and add MongoDB connection
app.listen(app.get('port'), function() {
    console.log(`API Server Listening on port ${app.get()}`)
})



