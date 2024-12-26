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
        username: user.username,
        password: hashPassword,
    })
    res.json({
        message: "user berhasil dibuat",
        data: student
    })
})
router.post("/login", async (req, res) => {
    //ambil data dari user
    const {username, password} = req.body
    //ambil data dari db
    try {
        let user = await Student.findOne({ username });

        if (user && bcrypt.compareSync(password, user.password)) {
            user = user.toObject();
            const { password, ...payload } = user;
            const token = jwt.sign(payload, JWT_KEY);

            res.status(200).json({
                meta: {
                    message: "success",
                    code: 200,
                    status: 200,
                },
                data: {
                    content: [
                        {
                            token,
                        },
                    ],
                },
            });
        } else {
            res.status(401).json({
                meta: {
                    message: "Invalid email and password",
                    code: 401,
                    status: 401,
                },
                data: {
                    content: [],
                },
            });
        }
    } catch (error) {
        res.status(500).json({
            meta: {
                message: "Internal server error",
                code: 500,
                status: 500,
            },
            data: {
                content: [],
            },
        });
    }
})

module.exports = router
