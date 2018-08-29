const {isName} = require('./strings')

const isArray = arg => Array.isArray(arg)

const isEmptyArray = arg => isArray(arg) && !arg.length

const isNotEmptyArray = arg => isArray(arg) && !!arg.length

const isArrayOfNames = arg => isNotEmptyArray(arg) && arg.every(el => isName(el))

module.exports = {
	isArray,
	isEmptyArray,
	isNotEmptyArray,
  isArrayOfNames
}
