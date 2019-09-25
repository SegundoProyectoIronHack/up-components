const controller = {};
const Users = require("../models/Users.model");
const passport = require("passport");
const randToken = require("rand-token")
const appCodes = require("./../app-codes/app-codes")

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
  let {username, password, email} = req.body

  if (!username|| !password || !email) {
    res.redirect("/?message=3");
    return;
  }

  Users.findOne({ "profile.username": username }, (err, user) => {
    if (user) {
      res.redirect("/?message=1");
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    Users.create({
      profile: {
        username,
        password: hashPass,
        token: randToken.generate(64)
      },
      contact: {
        email
      }
    })
      .then(userCreated => {
        res.redirect("/?message=5");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
      });
  });
};

controller.getLogout = (req, res, next) => {
  req.logout();
  res.redirect("/?message=4");
};

module.exports = controller;
