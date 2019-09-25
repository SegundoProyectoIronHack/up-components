const Products = require("./../../models/Products.model")

const keyboardsJSON = require("./data/keyboards.data.json")

const keyboardsSeed = async () => {
  await Products.create(keyboardsJSON)
  console.log("Keyboards added successfully.")


}

module.exports = keyboardsSeed
