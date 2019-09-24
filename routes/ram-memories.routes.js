const router = require("express").Router()
const controller = require("./../controllers/ram-memories.controller")

router.get("/", (req, res, next) => {
  controller.getAllRAMMemories(req, res, next)
})

module.exports = router
