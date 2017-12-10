const isUndefined = arg => typeof arg === "undefined"

const isNotUndefined = arg => !isUndefined(arg)

module.exports = {
	isUndefined: isUndefined,
	isNotUndefined: isNotUndefined
}