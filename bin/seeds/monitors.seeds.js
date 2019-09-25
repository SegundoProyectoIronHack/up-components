const Products = require("./../../models/Products.model")

const monitorsJSON = require("./data/monitors.data.json")

const monitorsSeed = async () => {
  await Products.create(monitorsJSON)
  console.log("Monitors added successfully.")
}

module.exports = monitorsSeed