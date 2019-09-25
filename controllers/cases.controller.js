const controller = {}
const Products = require("./../models/Products.model")

controller.getAllCases = (req, res, next) => {
  Products.find({
    "productInfo.productFamily" : "Case"
  }).then(cases => {
    console.log("Cases", cases)
    res.render("products/cases/index", {cases})
  })
}

module.exports = controller