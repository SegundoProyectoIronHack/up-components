const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("../models/Users.model");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    (username, password, done) => {
      Users.findOne({ "profile.username": username })
        .then(foundUser => {
          console.log("Ie", foundUser);
          if (!foundUser) {
            done(null, false, { message: "Incorrect username or password" });
            return;
          }

          if (!bcrypt.compareSync(password, foundUser.profile.password)) {
            done(null, false, { message: "Incorrect username or password" });
            return;
          }

          done(null, foundUser);
        })
        .catch(err => done(err));
    }
  )
);
