const Products = require("./../../models/Products.model")

const processorsJSON = require("./data/processors.data.json")

const processorsSeed = async () => {
  await Products.create(processorsJSON)
  console.log("Processors were added successfully.")
}

module.exports = processorsSeed