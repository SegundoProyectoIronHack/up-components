module.exports = function (price, taxes) {
  return (price + (price * taxes)).toFixed(2)
}