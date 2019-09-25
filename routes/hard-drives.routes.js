const router = require("express").Router()
const controller = require("./../controllers/hard-drives.controller")

router.get("/", (req, res, next) => {
  controller.getAllHardDrives(req, res, next)
})

module.exports = router
