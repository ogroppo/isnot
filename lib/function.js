var isFunction = module.exports.isFunction = arg => Object.prototype.toString.call(arg) === '[object Function]'

var isNotFunction = module.exports.isNotFunction = arg => !isFunction(arg)

var isPromise = module.exports.isPromise = arg => arg instanceof Promise

var isNotPromise = module.exports.isNotPromise = arg => !isPromise(arg)
