const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
let savedNotes = [];


async function getNotes(){
    const data = await fs.promises.readFile(path.join(__dirname, '../../db/db.json'), 'utf8')
    return JSON.parse(data)
}

// get all the notes
router.get('/', async (req, res) => {
    const notes = await getNotes()
    // fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', function (err, data) {
    //     savedNotes = JSON.parse(data)
    res.json(notes);
})

//new note saves and appears in the left hand column
router.post('/', async (req, res) => {
    const notes = await getNotes()
    req.body.id = uuidv4()
    notes.push(req.body) 
    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes) , function (err, data) {
        if( err ) console.log(err)
        res.json(notes);
        
    })
})

// bonus -- delete note
router.delete('/:id', (req, res) => {
    const dbFilePath = path.join(__dirname, '../../db/db.json');
    const savedNotes = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    const updatedNotes = savedNotes.filter((note) => note.id !== req.params.id);
    fs.writeFile(dbFilePath, JSON.stringify(updatedNotes), (err) => {
        console.log(err)
    });
    res.json(updatedNotes);
});



module.exports = router;