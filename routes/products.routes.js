const router = require("express").Router()
const controller = require("./../controllers/products.controller")

router.use("/graphic-cards", require("./graphic-cards.routes"))
router.use("/processors", require("./processors.routes"))
router.use("/ram-memories", require("./ram-memories.routes"))

router.get("/", (req, res, next) => {
  
})

router.get("/detail/:productId", (req, res, next) => {
  controller.getProductDetail(req, res, next)
})

module.exports = router
