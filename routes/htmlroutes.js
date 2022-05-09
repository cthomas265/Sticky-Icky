const path = require('path')
const router = require('express').Router ()

router.get ('/notes', (req, res) => { 
    res.sendFile (path.join(__dirname, '../public/notes.html'))

}) //ending point for info      /notes will be shown in url

router.get ('*', (req, res) => { 
    res.sendFile (path.join(__dirname, '../public/index.html'))

}) // * = no extra endpoint when on 3001

module.exports = router