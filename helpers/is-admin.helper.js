module.exports = function (user, options) {
  if (user) {
    if (user.profile.role === "ADMIN") {
      return options.fn(this)
    }
  }

  return options.inverse(this)
}
