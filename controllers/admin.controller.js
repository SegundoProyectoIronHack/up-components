const controller = {}
const Users = require("./../models/Users.model")
const Products = require("./../models/Products.model")

controller.index = (req, res, next) => {
  res.render("auth/admin/index")
}

controller.getProducts = (req, res, next) => {
  Products.find().then(products => {
    res.render("auth/admin/products", {products})
  })
}

controller.listProducts = (req, res, next) => {
  Products.find({"productInfo.productFamily": `${req.query.category}`}).lean().then(products => {
    res.render("auth/admin/products/list", {products})
  })
}

controller.editProduct = (req, res, next) => {
  Products.findById(req.params.productId).lean().then(product => {
    res.render("auth/admin/products/product", {product})
  })
}

module.exports = controller
