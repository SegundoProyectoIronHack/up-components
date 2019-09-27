module.exports = function (price, discount) {
  return Number.parseFloat(price - (price * discount)).toFixed(2)
}
