const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path')
const app = express()

// Allow more security to request
// preformatea todas las url para mayor seguridad
app.use(helmet())

// Allow cors
app.use(cors())

// Set module for helped request information

app.use(morgan("combined")) 

// Allow json request

app.use(express.json())
app.use(express.urlencoded( { extended : true }))

// Define static files access
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/user', require('./routes/user.route'))

module.exports = app  