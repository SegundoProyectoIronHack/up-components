const router = require("express").Router()
const controller = require("./../controllers/profile.controller")
const userMid = require("./../middlewares/user.mid")

router.post("/edit/:userId", (req, res, next) => {
  controller.updateProfile(req, res, next)
})

router.get("/confirm/:token", (req, res, next) => {
  controller.activateAccount(req, res, next)
})

router.get("/:userId", userMid.isAccountActivated, (req, res, next) => {
  controller.getProfile(req, res, next)
})

module.exports = router
