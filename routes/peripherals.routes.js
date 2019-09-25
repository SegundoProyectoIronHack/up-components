const router = require("express").Router()
const controller = require("./../controllers/peripherals.controller")

router.get("/", (req, res, next) => {
  controller.getAllPeripherals(req, res, next)
})

module.exports = router
