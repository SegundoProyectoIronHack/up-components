module.exports = function (price, discount) {
  return (price - (price * discount)).toFixed(2)
}
