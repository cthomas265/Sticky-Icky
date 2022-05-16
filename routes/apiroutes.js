const router = require('express').Router ()
const fs = require('fs')
let dbJson = require('../db/db.json')

router.get ('/notes', (req, res) => {
    dbJson = JSON.parse(fs.readFileSync ('./db/db.json', 'utf-8'))
    res.json(dbJson)
})

router.post ('/notes', (req, res) => {
    let noteTemp = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000)
    }
    dbJson.push(noteTemp)

    fs.writeFileSync('./db/db.json', JSON.stringify(dbJson))

    res.json(dbJson)
})

module.exports = router