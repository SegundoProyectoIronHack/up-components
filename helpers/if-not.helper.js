module.exports = function (value, options) {
  if (value.length > 0) {
    return options.inverse(this)
  }

  return options.fn(this)
}
