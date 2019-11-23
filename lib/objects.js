const isObject = arg => Object.prototype.toString.call(arg) === "[object Object]"

const isNotObject = arg => !isObject(arg)

const isEmptyObject = arg => isObject(arg) && !Object.keys(arg).length

const isNotEmptyObject = arg => isObject(arg) && !!Object.keys(arg).length

module.exports = {
	isObject,
	isNotObject,
	isEmptyObject,
	isNotEmptyObject
}
