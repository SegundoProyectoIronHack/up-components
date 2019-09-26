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
      case 'Graphic card': {
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
      }

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

        break
      }

      case 'Processor': {
        let {
          family, frequency, socket,
          cores, maxCapacity
        } = req.body
        
        updatedProduct = {
          "processor.features.family": family,
          "processor.features.frequency": frequency,
          "processor.features.socket": socket,
          "processor.features.cores": cores,
      
          "processor.memory.maxCapacity": maxCapacity,
        }

        break
      }

      case 'Mother board': {
        let {
          socket, maxProcessors, maxCapacity,
          numberOfSlots, usb2, usb3,
          sata, numberOfPins, backportsUsb2,
          backportsUsb3, ethernet, hdmi,
          motherBoardType, chipset, m2Slots,
          pciExpress3Slots, pciExpress2Slots, width,
          depth
        } = req.body
        
        updatedProduct = {
          "motherBoard.processor.socket": socket,
          "motherBoard.processor.maxProcessors": maxProcessors,

          "motherBoard.memory.maxCapacity": maxCapacity,
          "motherBoard.memory.numberOfSlots": numberOfSlots,
          
          "motherBoard.internalConnectors.usb2": usb2,
          "motherBoard.internalConnectors.usb3": usb3,
          "motherBoard.internalConnectors.sata": sata,

          "motherBoard.energy.numberOfPins": numberOfPins,
      
          "motherBoard.backports.usb2": backportsUsb2,
          "motherBoard.backports.usb3": backportsUsb3,
          "motherBoard.backports.ethernet": ethernet,
          "motherBoard.backports.hdmi": hdmi,

          "motherBoard.characteristics.type": motherBoardType,
          "motherBoard.characteristics.chipset": chipset,
          "motherBoard.characteristics.m2Slots": m2Slots,
          "motherBoard.characteristics.pciExpress3Slots": pciExpress3Slots,
          "motherBoard.characteristics.pciExpress2Slots": pciExpress2Slots,
      
          "motherBoard.weightAndDimensions.width": width,
          "motherBoard.weightAndDimensions.depth": depth,
        }

        break
      }

      case 'Hard drive': {
        let {
          format, capacity, interface,
          readingSpeed, writingSpeed, voltage,
          width, height, depth,
          weight
        } = req.body
        
        updatedProduct = {
          "hardDrive.characteristics.format": format,
          "hardDrive.characteristics.capacity": capacity,
          "hardDrive.characteristics.interface": interface,
          "hardDrive.characteristics.readingSpeed": readingSpeed,
          "hardDrive.characteristics.writingSpeed": writingSpeed,

          "hardDrive.energy.voltage": voltage,
      
          "hardDrive.weightAndDimensions.width": width,
          "hardDrive.weightAndDimensions.height": height,
          "hardDrive.weightAndDimensions.depth": depth,
          "hardDrive.weightAndDimensions.weight": weight,
        }

        break
      }

      case 'Case': {
        let {
          designType, ilumination, cableManagment,
          numberOfPorts35, numberOfPorts25, sideWindow,
          numberOfPortsUSB2, numberOfPortsUSB3, numberOfFans,
          waterCooling, width, height,
          depth, weight
        } = req.body

        updatedProduct = {
          "case.design.type": designType,
          "case.design.ilumination": ilumination,
          "case.design.cableManagment": cableManagment,
          "case.design.numberOfPorts35": numberOfPorts35,
          "case.design.numberOfPorts25": numberOfPorts25,
          "case.design.sideWindow": sideWindow,
          "case.design.numberOfPortsUSB2": numberOfPortsUSB2,
          "case.design.numberOfPortsUSB3": numberOfPortsUSB3,

          "case.cooling.numberOfFans": numberOfFans,
          "case.cooling.waterCooling": waterCooling,
      
          "case.weightAndDimensions.width": width,
          "case.weightAndDimensions.height": height,
          "case.weightAndDimensions.depth": depth,
          "case.weightAndDimensions.weight": weight,
        }

        break
      }

      case 'Power supply': {
        let {
          voltage, fanSize, width,
          height, depth, weight,
        } = req.body

        updatedProduct = {
          "powerSupply.energy.voltage": voltage,

          "powerSupply.cooling.fanSize": fanSize,
      
          "powerSupply.weightAndDimensions.width": width,
          "powerSupply.weightAndDimensions.height": height,
          "powerSupply.weightAndDimensions.depth": depth,
          "powerSupply.weightAndDimensions.weight": weight,
        }

        break
      }

      case 'Cooling system': {
        let {
          coolingSystemType, speed, airflow,
          spl, voltage, numberOfPins,
          width, height, depth,
          weight,
        } = req.body

        updatedProduct = {
          "coolingSystem.characteristics.type": coolingSystemType,
          "coolingSystem.characteristics.speed": speed,
          "coolingSystem.characteristics.airflow": airflow,
          "coolingSystem.characteristics.spl": spl,

          "coolingSystem.energy.voltage": voltage,
          "coolingSystem.energy.numberOfPins": numberOfPins,
      
          "coolingSystem.weightAndDimensions.width": width,
          "coolingSystem.weightAndDimensions.height": height,
          "coolingSystem.weightAndDimensions.depth": depth,
          "coolingSystem.weightAndDimensions.weight": weight,
        }
        
        break
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
