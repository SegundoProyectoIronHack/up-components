const controller = {}
const Users = require("./../models/Users.model")
const appCodes = require("./../app-codes/app-codes")

controller.getProfile = (req, res, next) => {
  Users.findById(req.params.userId)
  .then(userFound => {
    if (userFound) {
      res.render("auth/profile/index", {message: appCodes[`${req.query.message}`]})
    }
  })
}

controller.updateProfile = (req, res, next) => {
  res.redirect(`/profile/${req.params.userId}?message=7`)
}

module.exports = controller
