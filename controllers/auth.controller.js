require("dotenv").config()
const controller = {};
const Users = require("../models/Users.model");
const passport = require("passport");
const randToken = require("rand-token");
const appCodes = require("./../app-codes/app-codes");
const nodemailer = require("nodemailer");
const transporter = require("./../configs/nodemailer.config");

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
  let { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.redirect("/");
    return;
  }

  Users.findOne({ "profile.username": username }, (err, user) => {
    if (user) {
      res.redirect("/");
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    
    const token = randToken.generate(64)

    Users.create({
      profile: {
        username,
        password: hashPass,
        token
      },
      contact: {
        email
      }
    })
      .then(userCreated => {
        transporter
          .sendMail({
            from: process.env.MAIL_FROM,
            to: email,
            subject: "Account created in UP Components",
            text: "Text test",
            html: `
            
              <div style="max-width: 400px;
                margin: 2rem auto;
                padding: 2rem;
                background-color: #F8F8F8;
                font-family: sans-serif;
                box-shadow: 0 3px 6px rgba(0, 0, 0, .15)">
  
                <h1 style="color: crimson;
                  margin-bottom: 32px;">Verify your user</h1>
  
                <p style="color: #888888;
                  font-family: sans-serif;
                  font-size: 16px;
                  line-height: 1.5;
                  margin-bottom: 1rem;">We need you to verify your account so you can log in in our website.</p>
  
                <a style="display: inline-block;
                  font-family: sans-serif;
                  padding: .5rem 1rem;
                  border-radius: 3px;
                  box-shadow: 0 3px 6px crimson;
                  background-color: crimson;
                  color: #FFFFFF;
                  text-decoration: none;
                  text-transform: uppercase;
                  font-size: 14px;" href="${process.env.LOCAL_URL}profile/confirm/${token}">Activate account</a>
              </div>
              `
          })
          .then(emailSent => {
            res.redirect("/");
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err)
        res.render("auth/signup", { message: "Something went wrong" });
      });
  });
};

controller.getLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};

module.exports = controller;
