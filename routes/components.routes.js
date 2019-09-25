const router = require("express").Router()
const controller = require("./../controllers/components.controller")

router.get("/", (req, res, next) => {
  controller.getAllComponents(req, res, next)
})

module.exports = router
