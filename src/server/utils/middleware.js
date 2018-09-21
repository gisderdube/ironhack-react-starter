const jwt = require('jsonwebtoken')
const config = require('../config')

const userMiddleware = (req, res, next) => {
    const authHeader = req.get('Authorization')

    if (!authHeader) return next()
    const token = authHeader.split('Bearer ').join('')
    try {
        const decoded = jwt.verify(token, config.SECRET_JWT_PASSPHRASE)
        req.user = decoded
    } catch (err) {
    } finally {
        next()
    }
}

const checkLoggedIn = (req, res, next) => {
    if (req.user) return next()
    return res.status(403).send({ error: 'please sign in' })
}

module.exports = {
    userMiddleware,
    checkLoggedIn,
}
