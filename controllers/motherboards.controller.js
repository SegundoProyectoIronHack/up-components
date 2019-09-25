const controller = {}
const Products = require("./../models/Products.model")

controller.getAllMotherboards = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Mother board"
  }).then(motherboards => {
    console.log("Motherboards", motherboards)
    res.render("products/motherboards/index", {motherboards})
  })
}

module.exports = controller