const express = require('express')
const router = express.Router()

const authRoutes = require('./auth')

router.get('/', (req, res) => {
    res.send({ hello: true })
})

router.use('/auth', authRoutes)

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})

module.exports = router
