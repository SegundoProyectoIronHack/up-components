const Products = require("./../../models/Products.model")

const hardDrivesJSON = require("./data/hard-drives.data.json")

const hardDrivesSeed = async () => {
  await Products.create(hardDrivesJSON)
  console.log("Hard drives added successfully.")
}

module.exports = hardDrivesSeed
