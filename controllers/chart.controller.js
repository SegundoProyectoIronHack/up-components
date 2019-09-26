const controller = {}
const Products = require("./../models/Products.model")
const Users = require("./../models/Users.model")

controller.listChart = (req, res, next) => {
  Users.findById(req.user._id).populate("chart").then(chartProducts => {
    console.log(chartProducts.chart)
    res.render("auth/chart/index", {products: chartProducts.chart})
  })
}

controller.addToChart = (req, res, next) => {
  console.log(req.params.productId)
  Users.findByIdAndUpdate(req.user._id, { $push: { chart: req.params.productId } }, { new: true }).then(productAdded => {
    res.redirect("/chart")
  })
}

module.exports = controller
