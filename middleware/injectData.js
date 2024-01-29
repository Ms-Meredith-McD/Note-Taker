const db = require("../db/db.json")

function injectData(req, res, next) {
    const database = { db }
    req.database = database
    next()
}

module.exports = injectData