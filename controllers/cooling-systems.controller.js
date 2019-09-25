const controller = {}
const Products = require("./../models/Products.model")

controller.getAllCoolingSystems = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Cooling system"
  }).then(coolingSystems => {
    console.log("Cooling System", coolingSystems)
    res.render("products/cooling-systems/index", {coolingSystems})
  })
}

module.exports = controller