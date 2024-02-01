// This file acts as a gatekeeper for all routes

const router = require('express').Router();
const apiRoutes = require("./api");
const path = require('path');

// any routes beginning with /api, go and look in the api folder for more instructions
router.use("/api", apiRoutes)

// click link and load notes page
router.get('/notes', (req, res) => {
    // console.log('is the route to notes working? yes')
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// any other link will go back to the index page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
module.exports = router;