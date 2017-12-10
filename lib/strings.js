var isString = arg => typeof arg === 'string'

var isNotString = arg => !isString(arg)

var isStringAndNotEmpty = arg => isString(arg) && isNotEmptyString(arg)

var isEmptyString = arg => isString(arg) && !arg.trim()

var isNotEmptyString = arg => !isEmptyString(arg)

var isEmail = arg => isString(arg) && /\S+@\S+\.\S+/.test(arg)

var isNotEmail = arg => !isEmail(arg)

var isVariableName = (arg) => !!arg && new RegExp('^[a-zA-Z_$][0-9a-zA-Z_$]*$').test(arg) 

var isNotVariableName = (arg) => !isVariableName(arg)

var isURL = (arg) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!arg && pattern.test(arg);
}

var isNotURL = (arg) => !isURL(arg)

module.exports = {
	isString: isString,
	isNotString:isNotString,
	isStringAndNotEmpty: isStringAndNotEmpty,
	isEmptyString: isEmptyString,
	isNotEmptyString: isNotEmptyString,
	isEmail: isEmail,
	isNotEmail: isNotEmail,
	isVariableName: isVariableName,
	isNotVariableName: isNotVariableName,
	isURL: isURL,
	isNotURL: isNotURL
}
