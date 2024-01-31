// I'm going to put all my notes routes here
const router = require("express").Router();
const path = require('path');
const fs = require('fs');

// click link and load notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});










module.exports = router;