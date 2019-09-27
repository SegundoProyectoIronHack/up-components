require("dotenv").config()
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Users = require("../models/Users.model");
const randToken = require("rand-token")

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `${process.env.LOCAL_URL}auth/google/callback`
    },
    (accessToken, refreshToken, profile, done) => {
      // to see the structure of the data in received response:
      console.log("Google account details:", profile);

      Users.findOne({ "profile.googleId": profile.id})
        .then(user => {
          console.log(user)
          if (user) {
            done(null, user);
            return;
          }

          Users.create({
            profile: {
              username: profile._json.email,
              googleId: profile.id,
              token: randToken.generate(64),
              name: profile.name.givenName,
              surname: profile.name.familyName,
              role: "USER",
              status: "ACTIVE",
              image: {
                path: profile.photos[0].value,
                name: profile.displayName
              },
            },
            contact: {
              email: profile._json.email,
              phone: randToken.generate(9)
            }
          })
            .then(newUser => {
              done(null, newUser);
            })
            .catch(err => done(err)); // closes User.create()
        })
        .catch(err => done(err)); // closes User.findOne()
    }
  )
);