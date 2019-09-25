const Products = require("./../../models/Products.model")

const mouseJSON = require("./data/mouse.data.json")

const mouseSeed = async () => {
  await Products.create(mouseJSON)
  console.log("Mouse added successfully.")


}

module.exports = mouseSeed
