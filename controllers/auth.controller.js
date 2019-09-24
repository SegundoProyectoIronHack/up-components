const controller = {};
const Users = require("../models/Users.model");
const passport = require("passport");
const randToken = require("rand-token")

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
  const email = req.body.email;
  console.log("EMAIL", email);
  if (username === "" || password === "" || email === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  Users.findOne({ profile: { username } }, (err, user) => {
    if (user) console.log("Algo raro pasa");
    if (user) {
      res.render("auth/signup", { message: "The username already exists" });
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
        res.redirect("/");
      })
      .catch(err => {
        console.log(err);
        res.render("auth/signup", { message: "Something went wrong" });
      });
  });
};

controller.getLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};

module.exports = controller;
