const controller = {}
const Products = require("./../models/Products.model")

controller.getAllMouses = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Mouse"
  }).then(mouses => {
    res.render("products/mouses/index", {mouses})
  })
}

module.exports = controller
