const router = require("express").Router()
const controller = require("./../controllers/profile.controller")

router.post("/edit/:userId", (req, res, next) => {
  controller.updateProfile(req, res, next)
})

router.get("/:userId", (req, res, next) => {
  controller.getProfile(req, res, next)
})

module.exports = router
