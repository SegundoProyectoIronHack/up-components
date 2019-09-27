const controller = {};
const Comments = require("./../models/Comments.model");
const Products = require("./../models/Products.model");

controller.add = (req, res, next) => {
  let { content } = req.body;

  Comments.create({
    content,
    author: req.user._id
  }).then(commentAdded => {
    Products.findByIdAndUpdate(
      req.body.productId,
      { $push: { comments: commentAdded._id } },
      { new: true }
    ).then(commentSaved => {
      res.redirect(`/products/detail/${req.body.productId}`);
    });
  });
};

module.exports = controller;
