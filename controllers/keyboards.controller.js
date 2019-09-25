const controller = {}
const Products = require("./../models/Products.model")

controller.getAllKeyboards = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Keyboard"
  }).then(keyboards => {
    console.log("Keyboards", keyboards)
    res.render("products/keyboards/index", {keyboards})
  })
}

module.exports = controller