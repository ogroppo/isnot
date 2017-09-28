isString = arg => typeof arg === 'string'

isNotString = arg => !isString(arg)

isStringAndNotEmpty = arg => isString(arg) && isNotEmptyString(arg)

isEmptyString = arg => isString(arg) && !arg.trim()

isNotEmptyString = arg => !isEmptyString(arg)

isEmail = arg => isString(arg) && /\S+@\S+\.\S+/.test(arg)

isNotEmail = arg => !isEmail(arg)
