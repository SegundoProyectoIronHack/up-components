const router = require("express").Router()
const controller = require("./../controllers/products.controller")

router.use("/peripherals", require("./peripherals.routes"))
router.use("/graphics-cards", require("./graphics-cards.routes"))
router.use("/processors", require("./processors.routes"))
router.use("/ram-memories", require("./ram-memories.routes"))
router.use("/power-supplies", require ("./power-supplies.routes"))
router.use("/cases", require ("./cases.routes"))
router.use("/motherboards", require("./motherboards.routes"))
router.use("/cooling-systems", require("./cooling-systems.routes"))
router.use("/hard-drives", require("./hard-drives.routes"))
router.use("/monitors", require("./monitors.routes"))
router.use("/mouses", require("./mouses.routes"))
router.use("/keyboards", require("./keyboards.routes"))

router.get("/", (req, res, next) => {
  
})

router.get("/detail/:productId", (req, res, next) => {
  controller.getProductDetail(req, res, next)
})

module.exports = router
