const appCodes = require("./../app-codes/app-codes")
const express = require('express');
const router  = express.Router();

router.use('/auth', require('./auth.routes'));
router.use("/products", require("./products.routes"))

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.query)
  if (req.query.message) {
    res.render('index', {message: appCodes[`${req.query.message}`]});
    return
  }
  res.render('index');
});

module.exports = router;
