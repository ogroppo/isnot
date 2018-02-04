var isNumber = arg => typeof arg === 'number' && isFinite(arg)

var isNotNumber = arg => !isNumber(arg)

var isInt = arg => Number.isInteger(arg)

var isNotInt = arg => !isInt(arg)

var isEven = arg => isInt(arg) && !(arg % 2)

var isOdd = arg => isInt(arg) && !!(arg % 2)

module.exports = {
	isNumber: isNumber,
	isNotNumber: isNotNumber,
	isInt: isInt,
	isNotInt: isNotInt,
	isEven: isEven,
	isOdd: isOdd
}
