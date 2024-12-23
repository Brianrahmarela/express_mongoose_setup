const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router()

const { Student } = require('../models')
const { JWT_KEY } = require('../config')

router.post("/register", async (req, res) => {
    const user = req.body

    const hashPassword = await bcrypt.hash(user.password, 10)

    if(!hashPassword) throw new Err("error hash password")
    const student = await Student.create({
        name: user.name,
        password: hashPassword,
    })
    res.json({
        message: "user berhasil dibuat",
        data: student
    })
})
router.post("/login", async (req, res) => {
    //ambil data dari user
    const {name, password} = req.body
    // console.log('pass', password)
    // console.log(typeof password)
    //ambil data dari db
    let user = await Student.findOne({name})
    // console.log('user', user)

    //cek apakah datanya ada & password sama
    if (user && bcrypt.compareSync(password, user.password)) {
        // console.log(user)
        //ubah dokumen dari mongodb ke plain object
        user = user.toObject()
        const {password, ...payload} = user
        // console.log('user =>', user)
        // console.log('payload =>', payload)
        // console.log('password =>', password)
        //buat token
        const token = jwt.sign(payload, JWT_KEY) 
        res.json({
            message: "login success",
            token
        })
    } else {
        res.json({
            message: "Invalid email and password",
        })  
    }
})

module.exports = router
