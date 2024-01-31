const router = require('express').Router();
const injectData = require("../../middleware/injectData")
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');


// get all the notes
router.get('/', (req, res) => {
    console.log('is the route to notes working? yes!')
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', function (err, data) {
        console.log(err)
        console.log(data)
        const savedNotes = JSON.parse(data)
        console.log(savedNotes)
    res.json(savedNotes);
    })
})








module.exports = router;