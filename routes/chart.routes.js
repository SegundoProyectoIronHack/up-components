const router = require("express").Router()
const controller = require("./../controllers/chart.controller")

router.get("/", (req, res, next) => {
  controller.listChart(req, res, next)
})

router.get("/add/:productId", (req, res, next) => {
  controller.addToChart(req, res, next)
})

router.get("/remove/:productId", (req, res, next) => {
  controller.removeProduct(req, res, next)
})

router.get("/success", (req, res, next) => {
  controller.success(req, res, next)
})

router.get("/error", (req, res, next) => {
  controller.error(req, res, next)
})

router.get("/error", (req, res, next) => {
  controller.error(req, res, next)
})

router.get("/buy", (req, res, next) => {
  controller.buy(req, res, next)
})

module.exports = router
