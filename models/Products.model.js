const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
  productInfo: {
    brand: String,
    model: String,
    productFamily: {
      type: String,
      enum: [
        "Processor", "RAM",
        "Graphic card", "Hard drive",
        "Case", "Cooling system",
        "Power supply", "Mother board",
        "Monitor", "Mouse",
        "Keyboard"
      ]
    },
    type: {
      type: String,
      enum: ["Peripheral", "Component"]
    },
    category: {
      type: String,
      enum: ["Featured", "On sale", "Recommended", "Just in"]
    }
  },

  images: {
    gallery: [{
      path: String,
      name: String,
      imageID: String
    }],
    brand: {
      path: String,
      name: String
    }
  },

  price: {
    amount: Number,
    discountInfo: {
      discount: Number,
      dateFrom: Date,
      dateTo: Date
    },
    taxes: Number
  },

  sales: {
    unitsSold: Number
  },

  stock: {
    quantity: Number,
    minQuantity: Number,
    releaseDate: Date
  },

  graphicCard: {
    characteristics: {
      family: String,
      graphicProcessor: String,
      maximumResolution: String
    },
    memory: {
      capacity: Number,
      type: {
        type: String,
        enum: ["DDR4", "DDR5", "DDR6", "HBM"]
      },
      velocity: Number
    },
    typeAndPorts: {
      type: {
        type: String
      },
      hdmi: {
        type: Number
      },
      displayPort: {
        type: Number
      },
      vga: {
        type: Number
      },
      dvi: {
        type: Number
      }
    },
    cooling: {
      fanSize: Number,
      type: {
        type: String,
        enum: ["Air", "Liquid"]
      }
    },
    energy: {
      voltage: Number
    },
    weightAndDimensions: {
      width: Number,
      height: Number,
      depth: Number,
      weight: Number
    }
  },

  processor: {
    features: {
      family: String,
      frequency: Number,
      socket: String,
      cores: Number
    },
    memory: {
      maxCapacity: Number
    }
  },

  case: {
    weightAndDimensions: {
      width: Number,
      height: Number,
      weight: Number,
      depth: Number
    },
    design: {
      type: {
        type: String
      },
      ilumination: Boolean,
      cableManagment: Boolean,
      numberOfPorts35: Number,
      numberOfPorts25: Number,
      sideWindow: Boolean,
      numberOfPortsUSB2: Number,
      numberOfPortsUSB3: Number
    },
    cooling: {
      numberOfFans: Number,
      waterCooling: Boolean
    },
  },

  motherBoard: {
    processor: {
      socket: String,
      maxProcessors: Number
    },
    memory: {
      maxCapacity: Number,
      numberOfSlots: Number
    },
    internalConnectors: {
      usb2: Number,
      usb3: Number,
      sata: Number
    },
    energy: {
      numberOfPins: Number
    },
    backports: {
      usb2: Number,
      usb3: Number,
      ethernet: Number,
      hdmi: Number
    },
    characteristics: {
      type: {
        type: String
      },
      chipset: String,
      m2Slots: Number,
      pciExpress3Slots: Number,
      pciExpress2Slots: Number
    },
    weightAndDimensions: {
      width: Number,
      depth: Number
    }
  },

  monitor: {
    screen: {
      resolution: String,
      refreshRate: Number,
      threeD: Boolean,
      technology: {
        type: String,
        enum: ["LED", "LCD", "OLED", "QLED", "IPS", "TN"]
      },
      inches: Number,
      screenType: String,
      speakers: Boolean,
      camera: Boolean
    },
    portsAndInterfaces: {
      hdmi: Number,
      displayPort: Number,
      vga: Number,
      dvi: Number
    },
    ergonomics: {
      vesa: Boolean,
      vesaSize: String
    }
  },

  mouse: {
    characteristics: {
      type: {
        type: String,
        enum: ["Laser", "Optical", "Hybrid"]
      },
      interface: {
        type: String,
        enum: ["PS2", "USB"]
      },
      numberOfButtons: Number,
      movementResolution: Number,
      wireless: Boolean
    },
    design: {
      formFactor: String,
      ilumination: Boolean,
      iluminationRGB: Boolean
    },
    ergonomics: {
      cableLength: Number,
      buttonResistance: Number
    },
    weightAndDimensions: {
      width: Number,
      height: Number,
      depth: Number,
      weight: Number
    }
  },

  keyboard: {
    characteristics: {
      type: {
        type: String,
        enum: ["Mechanical", "Membrane"]
      },
      numberOfKeys: Number,
      typeOfSwitch: {
        type: String,
        enum: [
          "MX red", "MX brown",
          "MX blue", "MX black",
          "MX Silver", "MX white",
          "Razer green", "Romer-G",
          "Kaihl blue", "Kaihl red",
          "Kaihl brown", "Kaihl green"
        ]
      }
    },
    design: {
      layout: {
        type: String,
        enum: ["Spanish", "UK"]
      },
      iluminationRGB: Boolean
    },
    ergonomics: {
      cableLength: Number,
      keyResistance: Number
    },
    weightAndDimensions: {
      width: Number,
      height: Number,
      depth: Number,
      weight: Number
    }
  },

  coolingSystem: {
    characteristics: {
      type: {
        type: String,
        enum: ["Air", "Liquid"]
      },
      speed: Number,
      airflow: Number,
      spl: Number
    },
    energy: {
      voltage: Number,
      numberOfPins: Number
    },
    weightAndDimensions: {
      width: Number,
      height: Number,
      depth: Number,
      weight: Number
    }
  },

  hardDrive: {
    characteristics: {
      format: {
        type: String,
        enum: ["SSD", "Mechanical", "M2"]
      },
      capacity: Number,
      interface: String,
      readingSpeed: Number,
      writingSpeed: Number
    },
    energy: {
      voltage: Number
    },
    weightAndDimensions: {
      width: Number,
      height: Number,
      depth: Number,
      weight: Number
    }
  },

  powerSupply: {
    energy: {
      voltage: Number
    },
    cooling: {
      fanSize: Number
    },
    weightAndDimensions: {
      width: Number,
      height: Number,
      depth: Number,
      weight: Number
    }
  },

  ram: {
    characteristics: {
      capacity: Number,
      speed: Number,
      modules: Number,
      type: {
        type: String,
        enum: ["ddr", "ddr2", "ddr3", "ddr4"]
      }
    },
    energy: {
      voltage: Number
    },
    weightAndDimensions: {
      width: Number,
      height: Number,
      depth: Number,
      weight: Number
    }
  }
})

const Products = mongoose.model("Products", productSchema)
module.exports = Products
