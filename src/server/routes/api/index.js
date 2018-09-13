const express = require('express')
const router = express.Router()

const submoduleRoutes = require('./submodule')

router.get('/', (req, res) => {
    res.send({ hello: true })
})
router.get('/user/:id', (req, res) => {
    res.send({ email: 'someemail@gmail.com' })
})

router.use('/submodule', submoduleRoutes)

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})

module.exports = router
