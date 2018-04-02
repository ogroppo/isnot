var isDate = module.exports.isDate = arg => Object.prototype.toString.call(arg) === '[object Date]'

var isNotDate = module.exports.isNotDate = arg => !isDate(arg)
