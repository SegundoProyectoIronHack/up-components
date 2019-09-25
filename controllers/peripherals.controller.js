const controller = {}
const Products = require("./../models/Products.model")

controller.getAllPeripherals = (req, res, next) => {
  Products.find({"productInfo.type": "Peripheral"})
  .then(peripherals => {
    res.render("products/peripherals/index", {peripherals})
  })
}

module.exports = controller
