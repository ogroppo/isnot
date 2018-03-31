var isString = arg => typeof arg === 'string'

var isNotString = arg => !isString(arg)

var isEmptyString = arg => isString(arg) && !arg

var isNotEmptyString = arg => !isEmptyString(arg)

var isName = arg => isString(arg) && !!arg.trim()

var isNotName = arg => !isName(arg)

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

var isISOString = (arg) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|[+-]\d{2}:\d{2})$/.test(arg)

var isNotISOString = (arg) => !isISOString(arg)

var isUUID = (arg) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(arg)

var isNotUUID = (arg) => !isUUID(arg)

module.exports = {
	isString: isString,
	isNotString:isNotString,
	isEmptyString: isEmptyString,
	isNotEmptyString: isNotEmptyString,
	isName: isName,
	isNotName: isNotName,
	isEmail: isEmail,
	isNotEmail: isNotEmail,
	isVariableName: isVariableName,
	isNotVariableName: isNotVariableName,
	isURL: isURL,
	isNotURL: isNotURL,
	isISOString: isISOString,
	isNotISOString: isNotISOString,
	isUUID: isUUID,
	isNotUUID: isNotUUID
}
