// This file acts as a gatekeeper for all my api routes

const router = require('express').Router();
const injectData = require("../../middleware/injectData")
router.use('/notes', require("./notes.js"))










module.exports = router;