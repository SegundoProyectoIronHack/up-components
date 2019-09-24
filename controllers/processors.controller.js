const controller = {}
const Products = require("./../models/Products.model")

controller.getAllProcessors = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Processor"
  }).then(processors => {
    res.render("products/processors/index", {processors})
  })
}

module.exports = controller
