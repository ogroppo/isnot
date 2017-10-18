var isNumber = arg => typeof arg === 'number' && isFinite(arg)

var isNotNumber = arg => !isNumber(arg)

var isInt = arg => Number.isInteger(arg)

var isNotInt = arg => !isInt(arg)

module.exports = {
	isNumber: isNumber,
	isNotNumber: isNotNumber,
	isInt: isInt,
	isNotInt: isNotInt
}
