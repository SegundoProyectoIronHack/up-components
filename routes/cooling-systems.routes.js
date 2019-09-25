const router = require("express").Router()
const controller = require("./../controllers/cooling-systems.controller")

router.get("/", (req, res, next) => {
  controller.getAllCoolingSystems(req, res, next)
})

module.exports = router
