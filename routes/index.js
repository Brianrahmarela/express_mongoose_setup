const express = require('express')
const router = express.Router()

const studentRouter = require('./StudentController')
const classRoomRouter = require('./ClassRoomController')
const authRouter = require('./auth')
const verifyToken = require('../middleware/authorization')

router.use("/student", studentRouter)
router.use("/classroom", verifyToken, classRoomRouter)
router.use("/auth", authRouter)

module.exports = router
