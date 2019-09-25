module.exports = function (user, options) {
  console.log(user)
  if (user) {
    if (user.profile.role === "ADMIN") {
      console.log("lo es")
      return options.fn(this)
    }
  }

  return options.inverse(this)
}
