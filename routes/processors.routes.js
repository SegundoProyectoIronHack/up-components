const router = require("express").Router()
const controller = require("./../controllers/processors.controller")

router.get("/", (req, res, next) => {
  controller.getAllProcessors(req, res, next)
})

module.exports = router
