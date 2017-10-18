var isObject = arg => typeof arg === 'object' && arg !== null && !(arg instanceof Array)

var isNotObject = arg => !isObject(arg)

var isEmptyObject = arg => isObject(arg) && !Object.keys(arg).length

var isNotEmptyObject = arg => !isEmptyObject(arg)

module.exports = {
	isObject: isObject,
	isNotObject: isNotObject,
	isEmptyObject: isEmptyObject,
	isNotEmptyObject: isNotEmptyObject
}