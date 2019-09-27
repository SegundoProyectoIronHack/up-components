module.exports = function (price, taxes) {
  return Number.parseFloat(price + (price * taxes)).toFixed(2)
}