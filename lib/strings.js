var isString = arg => typeof arg === 'string'

var isNotString = arg => !isString(arg)

var isStringAndNotEmpty = arg => isString(arg) && isNotEmptyString(arg)

var isEmptyString = arg => isString(arg) && !arg.trim()

var isNotEmptyString = arg => !isEmptyString(arg)

var isEmail = arg => isString(arg) && /\S+@\S+\.\S+/.test(arg)

var isNotEmail = arg => !isEmail(arg)

var isVariableName = (arg) => new RegExp('^[a-zA-Z_$][0-9a-zA-Z_$]*$').test(arg) 

var isNotVariableName = (arg) => !isVariableName(arg)

module.exports = {
	isString: isString,
	isNotString:isNotString,
	isStringAndNotEmpty: isStringAndNotEmpty,
	isEmptyString: isEmptyString,
	isNotEmptyString: isNotEmptyString,
	isEmail: isEmail,
	isNotEmail: isNotEmail,
	isVariableName: isVariableName,
	isNotVariableName: isNotVariableName
}
