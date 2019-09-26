const router = require("express").Router()
const Users = require("./../models/Users.model")
const controller = require("./../controllers/admin.controller")

router.get("/", (req, res, next) => {
  controller.index(req, res, next)
})

router.get("/products", (req, res, next) => {
  controller.getProducts(req, res, next)
})

router.get("/products/list", (req, res, next) => {
  controller.listProducts(req, res, next)
})

router.get("/products/:productId", (req, res, next) => {
  controller.editProduct(req, res, next)
})

router.post("/products/edit", (req, res, next) => {
  controller.updateProduct(req, res, next)
})  

module.exports = router
