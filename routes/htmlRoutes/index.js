const router = require('express').Router()
const path = require('path')

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

router.get('*', (res, req) =>{
    res.sendFile(path.join(__dirname, '../../public/assets/index.html'))
})

module.exports = router