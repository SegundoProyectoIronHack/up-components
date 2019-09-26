const appCodes = require("./../app-codes/app-codes")
const express = require('express');
const router  = express.Router();
const controller = require("./../controllers/index.controller")

router.use('/auth', require('./auth.routes'));
router.use("/products", require("./products.routes"))
router.use("/profile", require("./profile.routes"))
router.use("/admin", require("./admin.routes"))
router.use("/chart", require("./chart.routes"))

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.query)
  if (req.query.message) {
    res.render('index', {message: appCodes[`${req.query.message}`]});
    return
  }
  res.render('index');
});

router.get("/account-activated", (req, res, next) => {
  res.render("account/account-activated")
})

router.get("/activate-account", (req, res, next) => {
  res.render("account/activate-account")
})

router.post("/search", (req, res, next) => {
  controller.search(req, res, next)
})

router.get("/search-results", (req, res, next) => {
  
})

module.exports = router;
