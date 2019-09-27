const router = require("express").Router()
const controller = require("./../controllers/comments.controller")

router.post("/add", (req, res, next) => {
  controller.add(req, res, next)
})

module.exports = router
