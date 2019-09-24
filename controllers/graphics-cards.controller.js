const controller = {}
const Products = require("./../models/Products.model")

controller.getAllGraphicsCards = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Graphic card"
  }).then(graphicsCards => {
    console.log(graphicsCards)
    res.render("products/graphics-cards/index", {graphicsCards})
  })
}

module.exports = controller