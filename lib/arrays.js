var isArray = arg => Array.isArray(arg)

var isEmptyArray = arg => isArray(arg) && !arg.length

var isNotEmptyArray = arg => isArray(arg) && !!arg.length

module.exports = {
	isArray: isArray,
	isEmptyArray: isEmptyArray,
	isNotEmptyArray: isNotEmptyArray
}
