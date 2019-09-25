const controller = {}
const Products = require("./../models/Products.model")

controller.getAllHardDrives = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Hard drive"
  }).then(hardDrives => {
    console.log("Hard drive", hardDrives)
    res.render("products/hard-drives/index", {hardDrives})
  })
}

module.exports = controller