const Products = require("./../models/Products.model")
const controller = {}

controller.search = (req, res, next) => {
  Products.find({ $text: { $search: req.body.search } }).then(products => {
    res.render("products/search/index", {products})
  })
}

controller.searchResults = (req, res, next) => {
  res.render
}

module.exports = controller
