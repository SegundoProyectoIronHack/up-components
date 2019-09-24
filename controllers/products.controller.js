const controller = {}
const Products = require("./../models/Products.model")

controller.getProductDetail = (req, res, next) => {
  Products.findById(req.params.productId).lean().then(product => {
    console.log(product)
    res.render("products/detail", {product})
  })
}

module.exports = controller
