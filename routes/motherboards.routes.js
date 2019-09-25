const router = require("express").Router()
const controller = require("./../controllers/motherboards.controller")

router.get("/", (req, res, next) => {
  controller.getAllMotherboards(req, res, next)
})

module.exports = router
