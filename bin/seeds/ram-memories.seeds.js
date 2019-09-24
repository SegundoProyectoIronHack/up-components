const Products = require("./../../models/Products.model")

const ramMemoriesJSON = require("./data/ram-memories.data.json")

const ramMemoriesSeed = async () => {
  await Products.create(ramMemoriesJSON)
  console.log("Ram memories added successfully.")
}

module.exports = ramMemoriesSeed
