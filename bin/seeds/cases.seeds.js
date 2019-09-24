const Products = require("./../../models/Products.model")

const casesJSON = require("./data/cases.data.json")

const casesSeed = async () => {
  await Products.create(casesJSON)
  console.log("Cases added successfully.")
}

module.exports = casesSeed