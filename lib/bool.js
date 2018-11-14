var isBool = module.exports.isBool = arg => Object.prototype.toString.call(arg) === '[object Boolean]'

var isNotBool = module.exports.isNotBool = arg => !isBool(arg)

module.exports = {
  isBoolean: isBool,
  isBool,
  isNotBoolean: isNotBool,
  isNotBool
}
