const mongoose = require("mongoose");
const Products = require("./../models/Products.model")
const Users = require("./../models/Users.model")

// Import the necessary seeds
const ramMemoriesSeed = require("./seeds/ram-memories.seeds")
const powerSuppliesSeed = require("./seeds/power-supplies.seeds")
const processorsSeed = require("./seeds/processors.seeds")
const graphicsCardsSeed = require("./seeds/graphics-cards.seeds")
const casesSeed = require("./seeds/cases.seeds")
const motherboardsSeed = require("./seeds/motherboards.seeds")
const coolingSystemsSeed = require("./seeds/cooling-systems.seeds")
const hardDrivesSeed = require("./seeds/hard-drives.seeds")
const monitorsSeed = require("./seeds/monitors.seeds")
const mouseSeed = require("./seeds/mouse.seeds")
const keyboardsSeed = require("./seeds/keyboards.seeds")
const usersSeed = require("./seeds/users.seeds")

require("./../configs/db.config")

const createSeeds = async () => {
  await Products.deleteMany()
  console.log("All products deleted.")
  await ramMemoriesSeed()
  await powerSuppliesSeed()
  await processorsSeed()
  await graphicsCardsSeed()
  await casesSeed()
  await motherboardsSeed()
  await coolingSystemsSeed()
  await hardDrivesSeed()
  await monitorsSeed()
  await mouseSeed()
  await keyboardsSeed()

  await Users.deleteMany()
  console.log("All users deleted")
  await usersSeed()
}

createSeeds().then(() => {
  console.log("Seeds created successfully.")
  process.exit(0)
})
