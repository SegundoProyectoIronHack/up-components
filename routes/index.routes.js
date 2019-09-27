const appCodes = require("./../app-codes/app-codes");
const express = require("express");
const router = express.Router();
const controller = require("./../controllers/index.controller");
const Products = require("./../models/Products.model");

router.use("/auth", require("./auth.routes"));
router.use("/products", require("./products.routes"));
router.use("/profile", require("./profile.routes"));
router.use("/admin", require("./admin.routes"));
router.use("/chart", require("./chart.routes"));
router.use("/comments", require("./comments.routes"));

/* GET home page */
router.get("/", (req, res, next) => {
  Products.find({ "productInfo.category": "Featured" }).limit(3).then(featured => {
    Products.find({ "productInfo.category": "Recommended" }).limit(3).then(
      recommended => {
        Products.find({ "productInfo.category": "Just in" }).limit(3).then(justIn => {
          Products.find({ "productInfo.category": "On sale" }).limit(3).then(onSale => {
            if (req.query.message) {
              res.render(
                "index",
                { message: appCodes[`${req.query.message}`] },
                recommended,
                justIn,
                onSale,
                featured
              );
              return;
            }
            res.render("index", { recommended, justIn, onSale, featured });
          });
        });
      }
    );
  });
});

router.get("/account-activated", (req, res, next) => {
  res.render("account/account-activated");
});

router.get("/activate-account", (req, res, next) => {
  res.render("account/activate-account");
});

router.post("/search", (req, res, next) => {
  controller.search(req, res, next);
});

router.get("/search-results", (req, res, next) => {});

module.exports = router;
