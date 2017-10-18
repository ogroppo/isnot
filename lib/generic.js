const {isEmptyObject} = require('./objects')
const {isEmptyArray} = require('./arrays')
const {isEmptyString} = require('./strings')

var isEmpty = arg => {
	if(isEmptyObject(arg))
		return true;

	if(isEmptyArray(arg))
		return true;

	if(isEmptyString(arg))
		return true;

	if(arg === null)
		return true;

	if(arg === undefined)
		return true;
	
	return false;
}

var isNotEmpty = arg => !isEmpty(arg)

module.exports = {
	isEmpty: isEmpty,
	isNotEmpty: isNotEmpty
}