isObject = arg => typeof arg === 'object' && arg !== null && !(arg instanceof Array)

isEmptyObject = arg => isObject(arg) && !Object.keys(arg).length;
isNotEmptyObject = arg => !isEmptyObject(arg);