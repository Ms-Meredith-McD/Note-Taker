const store = require("../db/store.json")
const products = require("../db/products.json")
const customers = require("../db/customers.json")

function injectData(req, res, next) {
    const database = { store, products, customers }
    req.database = database
    next()
}

module.exports = injectData