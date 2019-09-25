const express = require("express");
const router = express.Router();
const passport = require("passport");

const controller = require("./../controllers/auth.controller");

router.get("/login", (req, res, next) => {
  controller.login(req, res, next);
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/?message=6",
    failureRedirect: "/?message=2",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.get("/signup", (req, res, next) => {
  controller.getSignup(req, res, next);
});

router.post("/signup", (req, res, next) => {
  controller.postSignup(req, res, next);
});

router.get("/logout", (req, res, next) => {
  controller.getLogout(req, res, next);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login" // here you would redirect to the login page using traditional login approach
  })
);

module.exports = router;
