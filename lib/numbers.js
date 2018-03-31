const isNumber = module.exports.isNumber = arg => typeof arg === 'number' && isFinite(arg)

const isNotNumber = module.exports.isNotNumber = arg => !isNumber(arg)

const isInt = module.exports.isInt = arg => Number.isInteger(arg)

const isNotInt = module.exports.isNotInt = arg => !isInt(arg)

const isEven = module.exports.isEven = arg => isInt(arg) && !(arg % 2)

const isOdd = module.exports.isOdd = arg => isInt(arg) && !!(arg % 2)

const isPositive = module.exports.isPositive = arg => isInt(arg) && arg > 0

const isNotPositive = module.exports.isNotPositive = arg => isNotInt(arg) || arg < 1
