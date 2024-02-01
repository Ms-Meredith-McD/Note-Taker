const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
let savedNotes;


// get all the notes
router.get('/', (req, res) => {
    // console.log('is the route to notes working? yes!')
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', function (err, data) {
        // console.log(err)
        // console.log(data)
        savedNotes = JSON.parse(data)
        // console.log(savedNotes)
    res.json(savedNotes);
    })
})

//new note saves and appears in the left hand column
router.post('/', (req, res) => {
    req.body.id = uuidv4()
    savedNotes.push(req.body) 
    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(savedNotes) , function (err, data) {
        res.json(savedNotes);
})
})

// bonus -- delete note
router.delete('/:id', (req, res) => {
    const dbFilePath = path.join(__dirname, '../../db/db.json');
    console.log(dbFilePath)
    const savedNotes = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    console.log(savedNotes)
    const updatedNotes = savedNotes.filter((note) => note.id !== req.params.id);
    console.log(updatedNotes)
    fs.writeFile(dbFilePath, JSON.stringify(updatedNotes), (err) => {
        console.log(err)
    });
    res.json(updatedNotes);
});



module.exports = router;