const controller = {}
const Products = require("./../models/Products.model")

controller.getAllMonitors = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Monitor"
  }).then(monitors => {
    res.render("products/monitors/index", {monitors})
  })
}

module.exports = controller
