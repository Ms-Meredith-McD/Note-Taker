// I'm going to put all my notes routes here
const router = require("express").Router();
const path = require('path');

// click link and load notes page
router.get('/notes', (req, res) => {
    console.log('is the route to notes working? yes')
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});











module.exports = router;