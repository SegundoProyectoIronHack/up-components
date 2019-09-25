const controller = {}
const Products = require("./../models/Products.model")

controller.getAllPowerSupplies = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Power supply"
  }).then(powerSupplies => {
    console.log("Power supply", powerSupplies)
    res.render("products/power-supplies/index", {powerSupplies})
  })
}

module.exports = controller