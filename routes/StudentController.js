const express = require('express')
const {Student} = require('../models/')

const app = express();

app.get('/', async(req, res) => {
    const student = await Student.find().populate("classRoom", "-__v")
    try {
        res.send(student)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.get('/:id', async(req, res) => {
    const student = await Student.findById(req.params.id)
    try {
        res.send(student)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.post('/', async(req, res) => {
    const student = await Student.create(req.body)
    // console.log('post student', student)
    try {
        res.send(student)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = app;