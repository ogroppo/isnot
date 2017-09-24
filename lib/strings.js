isString = arg => typeof arg === 'string'

isNotString = arg => !isString(arg)

isEmptyString = arg => isString(arg) && !arg.trim()

isNotEmptyString = arg => !isEmptyString(arg)

isEmail = arg => isString(arg) && /\S+@\S+\.\S+/.test(arg)

isNotEmail = arg => !isEmail(arg)
