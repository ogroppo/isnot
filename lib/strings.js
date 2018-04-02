var isString = module.exports.isString = arg => typeof arg === 'string'

var isNotString = module.exports.isNotString = arg => !isString(arg)

var isEmptyString = module.exports.isEmptyString = arg => isString(arg) && !arg

var isNotEmptyString = module.exports.isNotEmptyString = arg => !isEmptyString(arg)

var isName = module.exports.isName = arg => isString(arg) && !!arg.trim()

var isNotName = module.exports.isNotName = arg => !isName(arg)

var isEmail = module.exports.isEmail = arg => isString(arg) && /\S+@\S+\.\S+/.test(arg)

var isNotEmail = module.exports.isNotEmail = arg => !isEmail(arg)

var isVariableName = module.exports.isVariableName = arg => !!arg && new RegExp('^[a-zA-Z_$][0-9a-zA-Z_$]*$').test(arg)

var isNotVariableName = module.exports.isNotVariableName = arg => !isVariableName(arg)

var isURL = module.exports.isURL = arg => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!arg && pattern.test(arg);
}

var isNotURL = module.exports.isNotURL = arg => !isURL(arg)

var isISOString = module.exports.isISOString = arg => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|[+-]\d{2}:\d{2})$/.test(arg)

var isNotISOString = module.exports.isNotISOString = arg => !isISOString(arg)

var isUUID = module.exports.isUUID = arg => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(arg)

var isNotUUID = module.exports.isNotUUID = arg => !isUUID(arg)
