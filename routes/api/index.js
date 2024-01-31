// This file acts as a gatekeeper for all my api routes

const router = require('express').Router();
router.use('/notes', require("./notes.js"))










module.exports = router;