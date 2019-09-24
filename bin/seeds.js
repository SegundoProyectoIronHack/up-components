const mongoose = require("mongoose");
const Products = require("./../models/Products.model")

// Import the necessary seeds
const ramMemoriesSeed = require("./seeds/ram-memories.seeds")
const powerSuppliesSeed = require("./seeds/power-supplies.seeds")

require("./../configs/db.config")

const createSeeds = async () => {
  await Products.deleteMany()
  console.log("All products deleted.")
  await ramMemoriesSeed()
  await powerSuppliesSeed()
}

createSeeds().then(() => {
  console.log("Seeds created successfully.")
  process.exit(0)
})
