const express     = require('express')
// const logger      = require('morgan')
const bodyParser  = require('body-parser')
// const cors        = require('cors')
const api = require('./api')

const app = express()

app.set('port', (process.env.PORT || 8081))

// middleware
// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('static'))
// app.use(cors())

// route
app.use('/api', api)

// error-handler
app.use((req, res) => {
    const err = new Error('Not found')
    err.status = 404
    res.json(err)
})

// listen to server and add MongoDB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/standApp', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
})

app.listen(app.get('port'), function() {
    console.log(`API Server Listening on port ${8081}`)
})



