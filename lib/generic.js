const {isEmptyObject} = require('./objects')
const {isEmptyArray} = require('./arrays')
const {isEmptyString} = require('./strings')

const isEmpty = module.exports.isEmpty = arg => {
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

const isNotEmpty = module.exports.isNotEmpty = arg => !isEmpty(arg)
