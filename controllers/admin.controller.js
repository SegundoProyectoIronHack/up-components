const controller = {}
const Users = require("./../models/Users.model")
const Products = require("./../models/Products.model")

controller.index = (req, res, next) => {
  res.render("auth/admin/index")
}

controller.getProducts = (req, res, next) => {
  Products.find().then(products => {
    res.render("auth/admin/products", {products})
  })
}

controller.listProducts = (req, res, next) => {
  Products.find({"productInfo.productFamily": `${req.query.category}`}).lean().then(products => {
    res.render("auth/admin/products/list", {products})
  })
}

controller.updateProduct = (req, res, next) => {
  let id = req.body.id

  let {
    productFamily, model, brand,
    category, price, discount,
    taxes, quantity, minQuantity
  } = req.body

  let {
    family, graphicProcessor, maximumResolution,
    capacity, type, velocity,
    portType, hdmi, displayPort,
    vga, dvi, fanSize,
    coolingType, voltage, width,
    height, depth, weight
  } = req.body

  let updatedProduct = {}

  let commonProductInfo = {
    "productInfo.characteristics.family": family,
    "productInfo.brand": brand,
    "productInfo.model": model,
    "productInfo.productFamily": productFamily,
    "productInfo.category": category,

    "price.amount": price,
    "price.taxes": taxes,

    "price.discountInfo.discount": discount,

    "stock.quantity": quantity,
    "stock.minQuantity": minQuantity,
  }

  Products.findById(id).lean().then(product => {
    switch (req.body.productFamily) {
      case 'Graphic card':
        let {
          family, graphicProcessor, maximumResolution,
          capacity, type, velocity,
          portType, hdmi, displayPort,
          vga, dvi, fanSize,
          coolingType, voltage, width,
          height, depth, weight
        } = req.body

        updatedProduct = {
          "graphicCard.characteristics.family": family,
          "graphicCard.characteristics.graphicProcessor": graphicProcessor,
          "graphicCard.characteristics.maximumResolution": maximumResolution,
      
          "graphicCard.memory.capacity": capacity,
          "graphicCard.memory.type": type,
          "graphicCard.memory.velocity": velocity,
      
          "graphicCard.typeAndPorts.type": portType,
          "graphicCard.typeAndPorts.hdmi": hdmi,
          "graphicCard.typeAndPorts.displayPort": displayPort,
          "graphicCard.typeAndPorts.vga": vga,
          "graphicCard.typeAndPorts.dvi": dvi,
      
          "graphicCard.cooling.fanSize": fanSize,
          "graphicCard.cooling.type": coolingType,
      
          "graphicCard.energy.voltage": voltage,
      
          "graphicCard.weightAndDimensions.width": width,
          "graphicCard.weightAndDimensions.height": height,
          "graphicCard.weightAndDimensions.depth": depth,
          "graphicCard.weightAndDimensions.weight": weight
        }

        break;

      case 'RAM': {
        let {
          capacity, speed, modules,
          ramType, voltage, width,
          height, depth, weight
        } = req.body
        
        updatedProduct = {
          "ram.characteristics.capacity": capacity,
          "ram.characteristics.speed": speed,
          "ram.characteristics.modules": modules,
          "ram.characteristics.type": ramType,
      
          "ram.energy.voltage": voltage,
      
          "ram.weightAndDimensions.width": width,
          "ram.weightAndDimensions.height": height,
          "ram.weightAndDimensions.depth": depth,
          "ram.weightAndDimensions.weight": weight
        }
      }
    }

    let totalProductUpdated = Object.assign(commonProductInfo, updatedProduct)

    Products.findByIdAndUpdate(req.body.id, totalProductUpdated).then(productUpdated => {
      res.redirect(`/admin/products/${id}`)
    })
  })
}

controller.editProduct = (req, res, next) => {
  Products.findById(req.params.productId).lean().then(product => {
    res.render("auth/admin/products/product", {product})
  })
}

module.exports = controller
