const router = require("express").Router()
const controller = require("./../controllers/chart.controller")

router.get("/", (req, res, next) => {
  controller.listChart(req, res, next)
})

router.get("/add/:productId", (req, res, next) => {
  controller.addToChart(req, res, next)
})

module.exports = router
