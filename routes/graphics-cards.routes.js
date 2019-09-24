const router = require("express").Router()
const controller = require("./../controllers/graphics-cards.controller")

router.get("/", (req, res, next) => {
  controller.getAllGraphicsCards(req, res, next)
})

module.exports = router
