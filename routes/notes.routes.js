// I'm going to put all my notes routes here
const router = require("express").Router();
const path = require('path');
const fs = require('fs');

// click link and load notes page
router.get('/notes', (req, res) => {
    console.log('is the route to notes working? yes')
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// get all the notes
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8')
    const savedNotes = JSON.parse(note)
    res.json(savedNotes);
})








module.exports = router;