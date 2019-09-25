const router = require("express").Router()
const controller = require("./../controllers/monitors.controller")

router.get("/", (req, res, next) => {
  controller.getAllMonitors(req, res, next)
})

module.exports = router
