const Users = require("./../models/Users.model");
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");

module.exports.isAccountActivated = (req, res, next) => {
  if (req.body.username) {
    Users.findOne({ "profile.username": req.body.username }).then(userFound => {
      if (userFound) {
        if (userFound.profile.status === "ACTIVE") {
          next();
          return;
        }

        res.redirect("/activate-account");
        return;
      } else {
        res.redirect("/");
        return;
      }
    });
  } else {
    if (req.user) {
      if (req.user.profile.status === "ACTIVE") {
        next()
        return
      } else {
        res.redirect("/")
      }
    } else {
      res.redirect("/")
    }
  }
};

module.exports.isSessionActive = (req, res, next) => {
  console.log("USER LOGIN:", req.user);
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};
