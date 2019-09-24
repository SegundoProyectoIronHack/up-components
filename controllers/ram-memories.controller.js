const controller = {}
const Products = require("./../models/Products.model")

controller.getAllRAMMemories = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "RAM"
  }).then(ramMemories => {
    console.log("Ram memories", ramMemories)
    res.render("products/ram-memories/index", {ramMemories})
  })
}

module.exports = controller
