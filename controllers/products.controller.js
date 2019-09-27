const controller = {};
const Products = require("./../models/Products.model");

controller.getProductDetail = (req, res, next) => {
  Products.findById(req.params.productId)
    .populate({
      path: "comments",
      populate: {
        path: "author"
      }
    })
    .lean()
    .then(product => {
      let productEditable = JSON.parse(JSON.stringify(product))
      productEditable.price.amount = productEditable.price.amount.toFixed(2)
      productEditable.comments = productEditable.comments.map(comment => {
        return {
          ...comment,
          createdAt: comment.createdAt.substr(0, comment.createdAt.indexOf("T"))
        }
      })
      res.render("products/detail", { product: productEditable });
    });
};

module.exports = controller;
