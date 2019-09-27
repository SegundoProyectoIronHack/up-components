require("dotenv").config()
const controller = {};
const Products = require("./../models/Products.model");
const Users = require("./../models/Users.model");
const paypal = require("paypal-rest-sdk");

// Paypal configuration
paypal.configure({
  mode: "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET
});

controller.success = (req, res, next) => {
  Users.findByIdAndUpdate(
    req.user._id,
    {
      $push: { purchases: req.user.chart },
      $pullAll: { chart: req.user.chart }
    },
    { new: true }
  ).then(chartCleant => {
    res.render("auth/chart/success");
  });
};

controller.error = (req, res, next) => {
  res.render("auth/chart/error");
};

controller.buy = (req, res, next) => {
  Users.findById(req.user._id)
    .populate("chart")
    .then(userFound => {
      let chart = JSON.parse(JSON.stringify(userFound.chart));
      let totalAmount = 0
      let totalProductsNames = []
      chart.forEach(chartProduct => {
        totalAmount += +chartProduct.price.amount
        totalProductsNames.push(`${chartProduct.productInfo.model} (${+chartProduct.price.amount}€)`)
      });

      // // create payment
      var payment = {
        intent: "authorize",
        payer: {
          payment_method: "paypal"
        },
        redirect_urls: {
          return_url: `${process.env.LOCAL_URL}chart/success`,
          cancel_url: `${process.env.LOCAL_URL}chart/error`
        },
        transactions: [{
          amount: {
            total: totalAmount.toFixed(2),
            currency: "EUR"
          },
          description: totalProductsNames.join(" - ")
        }]
      };

      // call the create Pay method
      createPay(payment)
        .then(transaction => {
          var id = transaction.id;
          var links = transaction.links;
          var counter = links.length;
          while (counter--) {
            if (links[counter].method == "REDIRECT") {
              // redirect to paypal where user approves the transaction
              return res.redirect(links[counter].href);
            }
          }
        })
        .catch(err => {
          res.redirect("/chart/error");
        });
    });
};

controller.listChart = (req, res, next) => {
  Users.findById(req.user._id)
    .populate("chart")
    .then(chartProducts => {
      // let totalProductPrice = chartProducts.chart.reduce((prevProduct, currentProduct) => prevProduct.price.amount + currentProduct.price.amount)
      let totalChartPrice = 0;
      chartProducts.chart.forEach(
        product => (totalChartPrice += product.price.amount)
      );
      totalChartPrice = totalChartPrice.toFixed(2)
      res.render("auth/chart/index", {
        products: chartProducts.chart,
        totalChartPrice
      });
    });
};

controller.addToChart = (req, res, next) => {
  Users.findByIdAndUpdate(
    req.user._id,
    { $push: { chart: req.params.productId } },
    { new: true }
  ).then(productAdded => {
    res.redirect("/chart");
  });
};

controller.removeProduct = (req, res, next) => {
  Users.findByIdAndUpdate(
    req.user._id,
    { $pull: { chart: req.params.productId } },
    { new: true }
  ).then(productDeleted => {
    res.redirect("/chart");
  });
};

// helper functions
var createPay = payment => {
  return new Promise((resolve, reject) => {
    paypal.payment.create(payment, function(err, payment) {
      if (err) {
        reject(err);
      } else {
        resolve(payment);
      }
    });
  });
};

module.exports = controller;
