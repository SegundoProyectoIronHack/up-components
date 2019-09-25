const router = require("express").Router()
const controller = require("./../controllers/cases.controller")

router.get("/", (req, res, next) => {
  controller.getAllCases(req, res, next)
})

module.exports = router
