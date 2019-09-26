const controller = {}
const Products = require("./../models/Products.model")
const Users = require("./../models/Users.model")

controller.listChart = (req, res, next) => {
  Users.findById(req.user._id).populate("chart").then(chartProducts => {
    // let totalProductPrice = chartProducts.chart.reduce((prevProduct, currentProduct) => prevProduct.price.amount + currentProduct.price.amount)
    let totalChartPrice = 0
    chartProducts.chart.forEach(product => totalChartPrice += product.price.amount)
    console.log("TOTAL", totalChartPrice)
    res.render("auth/chart/index", {products: chartProducts.chart, totalChartPrice})
  })
}

controller.addToChart = (req, res, next) => {
  console.log(req.params.productId)
  Users.findByIdAndUpdate(req.user._id, { $push: { chart: req.params.productId } }, { new: true }).then(productAdded => {
    res.redirect("/chart")
  })
}

controller.removeProduct = (req, res, next) => {
  console.log(req.params.productId)
  console.log("------")

  Users.findByIdAndUpdate(req.user._id, { $pull: {chart: req.params.productId} }, { new: true }).then(productDeleted => {
    res.redirect("/chart")
  })
  
  console.log(req.user.chart)
}

module.exports = controller
