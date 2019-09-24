const Products = require("./../../models/Products.model")

const powerSuppliesJSON = require("./data/power-supplies.data.json")

const powerSuppliesSeed = async () => {
  await Products.create(powerSuppliesJSON)
  console.log("Power supplies added successfully.")
}

module.exports = powerSuppliesSeed
