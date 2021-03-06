const controller = {};
const Users = require("./../models/Users.model");
const appCodes = require("./../app-codes/app-codes");

controller.getProfile = (req, res, next) => {
  Users.findById(req.params.userId).populate("purchases").then(userFound => {
    if (userFound) {
      res.render("auth/profile/index", {
        userProfile: userFound,
        message: appCodes[`${req.query.message}`]
      });
    }
  });
};

controller.updateProfile = (req, res, next) => {
  let {
    name,
    surname,
    email,
    phone,
    address,
    buildingNumber,
    zipCode,
    suiteNumber,
    country,
    stateProvince,
    city
  } = req.body;

  console.log(
    name,
    surname,
    email,
    phone,
    address,
    buildingNumber,
    zipCode,
    suiteNumber,
    country,
    stateProvince,
    city
  );

  Users.findByIdAndUpdate(
    req.params.userId,
    {
      "profile.name": name,
      "profile.surname": surname,

      "contact.email": email,
      "contact.phone": phone,
      
      "address.address": address,
      "address.buildingNumber": buildingNumber,
      "address.zipCode": zipCode,
      "address.suiteNumber": suiteNumber,
      "address.country": country,
      "address.stateProvince": stateProvince,
      "address.city": city
    },
    {
      new: true
    }
  ).then(userUpdated => {
    console.log(userUpdated);
    res.redirect(`/profile/${req.params.userId}?message=7`);
  });
};

controller.activateAccount = (req, res, next) => {
  console.log("TOKEN:", req.params.token)
  Users.findOneAndUpdate({"profile.token": req.params.token}, {
    "profile.status": "ACTIVE"
  }, {
    new: true
  })
  .then(profileActivated => {
    console.log("PROFILE ACTIVATED:",profileActivated)
    if (profileActivated) {
      res.redirect("/account-activated")
    }
  })
}

module.exports = controller;
