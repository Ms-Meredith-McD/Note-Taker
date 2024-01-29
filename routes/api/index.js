// This file acts as a gatekeeper for all my api routes

const router = require('express').Router();
const injectData = require("../../middleware/injectData")

router.use("/store", injectData, storeRoutes)








module.exports = router;