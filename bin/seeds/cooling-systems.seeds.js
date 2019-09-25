const Products = require("./../../models/Products.model")

const coolingSystemsJSON = require("./data/cooling-systems.data.json")

const coolingSystemsSeed = async () => {
  await Products.create(coolingSystemsJSON)
  console.log("Cooling systems added successfully.")


}

module.exports = coolingSystemsSeed
