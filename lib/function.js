var isFunction = arg => Object.prototype.toString.call(arg) === '[object Function]'

var isNotFunction = arg => !isFunction(arg)

module.exports = {
	isFunction: isFunction,
	isNotFunction: isNotFunction
}
