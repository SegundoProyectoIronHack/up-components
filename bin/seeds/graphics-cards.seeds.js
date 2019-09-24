const Products = require("./../../models/Products.model")

const graphicsCardsJSON = require("./data/graphics-cards.data.json")

const graphicsCardsSeed = async () => {
  await Products.create(graphicsCardsJSON)
  console.log("Graphics cards added successfully.")


}

module.exports = graphicsCardsSeed
