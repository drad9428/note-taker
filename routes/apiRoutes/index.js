const router = require('express').Router()
const db = require('../../db/db.json')
const fs = require('fs')

router.get('/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    res.json(data)
})

router.post('/notes', ({body}, res) =>{
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    
    data.push(body)
    fs.writeFileSync("./db/db.json", JSON.stringify(data))
    res.json(data)
})

module.exports = router