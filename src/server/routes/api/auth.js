const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const bcrypt = require('bcrypt')

router.post('/sign-up', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) res.status(400).send({ error: 'Missing Credentials.' })

    User.findOne({ email })
        .then(existingUser => {
            if (existingUser) return res.status(400).send({ error: 'E-Mail exists already.' })

            const hashedPassword = bcrypt.hashSync(password, 10)
            return new User({ email, password: hashedPassword }).save()
        })
        .then(user => {
            res.send(user)
        })
})

router.post('/sign-in', (req, res) => {})

module.exports = router
