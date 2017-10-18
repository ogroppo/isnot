var isBool = arg => Object.prototype.toString.call(arg) === '[object Boolean]'

var isNotBool = arg => !isBool(arg)

module.exports = {
	isBool: isBool,
	isNotBool: isNotBool
}