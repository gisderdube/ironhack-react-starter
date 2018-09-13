const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const compression = require('compression')
const mongoose = require('mongoose')
const chalk = require('chalk')

const config = require('./config')

const apiRoutes = require('./routes/api')
const appRoutes = require('./routes/app')

mongoose.connect(
    config.MONGODB_URI,
    { useNewUrlParser: true }
)

const server = express()

server.use(morgan('dev'))
server.use(helmet())
server.use(compression())
server.use(bodyParser.json())

if (!config.IS_PRODUCTION) {
    server.use(express.static(path.join(__dirname, '../../dist')))
}

server.use(express.static(path.join(__dirname, 'public')))
server.use('/api', apiRoutes)
server.use(appRoutes)

mongoose.connection.on('connected', () => {
    console.log(chalk.blue.bold('Connected to Mongo!'))

    server.listen(config.PORT, () => {
        console.log(chalk.blue.bold('Server is up and running: http://localhost:' + config.PORT))
    })
})
