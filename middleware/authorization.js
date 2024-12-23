const jwt = require("jsonwebtoken");
const { JWT_KEY } = require('../config')

const verifyToken = (req, res, next) => {
    const headers = req.headers.authorization
    console.log('headers', headers)
    if(!headers) throw new Error("Invalid Header")

    const token = headers.split(" ")[1]
    console.log('token', token)

    if(!token) throw new Error("Invalid Token")

    const payload = jwt.verify(token, JWT_KEY)
    console.log('payload', payload)

    next()
}

module.exports = verifyToken