const router = require("express").Router()
const controller = require("./../controllers/keyboards.controller")

router.get("/", (req, res, next) => {
  controller.getAllKeyboards(req, res, next)
})

module.exports = router
