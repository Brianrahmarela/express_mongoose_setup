const express = require('express')
const {ClassRoom} = require('../models/')

const app = express();

app.get('/', async(req, res) => {
    const classRoom = await ClassRoom.find()
    try {
        // res.send(classRoom)
        res.json({
            message: "Success get data classroom",
            data: classRoom
        })
    } catch (error) {
        console.log('error classroom', error)
        res.status(500).send(error)
    }
})

app.post('/', async(req, res) => {
    const classRoom = await ClassRoom.create(req.body)
    // console.log('post classRoom', classRoom)
    try {
        res.send(classRoom)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = app;