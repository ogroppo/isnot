var isArray = arg => Array.isArray(arg)

var isEmptyArray = arg => Array.isArray(arg) && !arg.length

var isNotEmptyArray = arg => !isEmptyArray(arg)

module.exports = {
	isArray: isArray,
	isEmptyArray: isEmptyArray,
	isNotEmptyArray: isNotEmptyArray
}