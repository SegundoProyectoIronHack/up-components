const express = require('express');
const router  = express.Router();

router.use('/auth', require('./auth.routes'));
router.use("/products", require("./products.routes"))

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
