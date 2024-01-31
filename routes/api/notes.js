const router = require('express').Router();
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

//save icon appears in the left-hand column
router.get('/', (req, res) => {

})


//new note saves and appears in the left hand column



// click on an existing note and it appears in right hand column



// click on write icon in navigation bar I am presented with empty fields to enter a new note in the right hand column



// bonus -- delete note




module.exports = router;