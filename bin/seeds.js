const mongoose = require("mongoose");
const Products = require("./../models/Products.model")

// Import the necessary seeds
const ramMemoriesSeed = require("./seeds/ram-memories.seeds")
const powerSuppliesSeed = require("./seeds/power-supplies.seeds")
const processorsSeed = require("./seeds/processors.seeds")
const graphicsCardsSeed = require("./seeds/graphics-cards.seeds")

require("./../configs/db.config")

const createSeeds = async () => {
  await Products.deleteMany()
  console.log("All products deleted.")
  await ramMemoriesSeed()
  await powerSuppliesSeed()
  await processorsSeed()
  await graphicsCardsSeed()
}

createSeeds().then(() => {
  console.log("Seeds created successfully.")
  process.exit(0)
})
