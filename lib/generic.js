require('./objects');
require('./arrays');
require('./strings');

isEmpty = arg => {
	if(isEmptyObject(arg))
		return true;

	if(isEmptyArray(arg))
		return true;

	if(isEmptyString(arg))
		return true;

	return false;
}
isNotEmpty = arg => !isEmpty(arg);