const controller = {};
const User = require("./../models/User");
const passport = require("passport");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

controller.login = (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
};

controller.getSignup = (req, res, next) => {
  res.render("auth/signup");
};

controller.postSignup = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
      });
  });
};

controller.getLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};

module.exports = controller;
