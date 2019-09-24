const Products = require("./../../models/Products.model")

const motherboardsJSON = require("./data/motherboards.data.json")

const motherboardsSeed = async () => {
  await Products.create(motherboardsJSON)
  console.log("Motherboards added successfully.")


}

module.exports = motherboardsSeed
