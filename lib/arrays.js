const {isName} = require('./strings')

var isArray = arg => Array.isArray(arg)

var isEmptyArray = arg => isArray(arg) && !arg.length

var isNotEmptyArray = arg => isArray(arg) && !!arg.length

var isArrayOfNames = arg => isNotEmptyArray(arg) && arg.every(el => isName(el))

module.exports = {
	isArray,
	isEmptyArray,
	isNotEmptyArray,
  isArrayOfNames
}
