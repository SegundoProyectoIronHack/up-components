const express = require("express");
const router = express.Router();
const passport = require("passport")

const controller = require("./../controllers/auth.controller")

router.get("/login", (req, res, next) => { controller.login(req, res, next) });

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => { controller.getSignup(req, res, next) });

router.post("/signup", (req, res, next) => { controller.postSignup(req, res, next) });

router.get("/logout", (req, res, next) => { controller.getLogout(req, res, next) });

module.exports = router;
