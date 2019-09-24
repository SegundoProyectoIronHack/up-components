const router = require("express").Router()

router.use("/graphic-cards", require("./graphic-cards.routes"))
router.use("/processors", require("./processors.routes"))

router.get("/", (req, res, next) => {
  
})

module.exports = router
