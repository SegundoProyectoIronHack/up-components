const router = require("express").Router()
const controller = require("./../controllers/power-supplies.controller")

router.get("/", (req, res, next) => {
  controller.getAllPowerSupplies(req, res, next)
})

module.exports = router
