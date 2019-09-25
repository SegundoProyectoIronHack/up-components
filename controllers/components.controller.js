const controller = {}
const Products = require("./../models/Products.model")

controller.getAllComponents = (req, res, next) => {
  Products.find({"productInfo.type": "Component"})
  .then(components => {
    console.log(components)
    res.render("products/components/index", {components})
  })
}

module.exports = controller
