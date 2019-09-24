const mongoose = require("mongoose");
const Products = require("./../models/Products.model")

// Import the necessary seeds
const ramMemoriesSeed = require("./seeds/ram-memories.seeds")

require("./../configs/db.config")

const createSeeds = async () => {
  await Products.deleteMany()
  console.log("All products deleted.")
  await ramMemoriesSeed()
}

createSeeds().then(() => {
  console.log("Seeds created successfully.")
  process.exit(0)
})
