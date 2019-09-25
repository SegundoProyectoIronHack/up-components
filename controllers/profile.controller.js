const controller = {};
const Users = require("./../models/Users.model");
const appCodes = require("./../app-codes/app-codes");

controller.getProfile = (req, res, next) => {
  Users.findById(req.params.userId).then(userFound => {
    if (userFound) {
      res.render("auth/profile/index", {
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

module.exports = controller;
