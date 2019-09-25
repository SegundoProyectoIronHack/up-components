const router = require("express").Router()
const controller = require("./../controllers/mouses.controller")

router.get("/", (req, res, next) => {
  controller.getAllMouses(req, res, next)
})

module.exports = router
