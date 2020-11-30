export const isObject = (arg) =>
  Object.prototype.toString.call(arg) === "[object Object]";

export const isNotObject = (arg) => !isObject(arg);

export const isEmptyObject = (arg) => isObject(arg) && !Object.keys(arg).length;

export const isNotEmptyObject = (arg) =>
  isObject(arg) && !!Object.keys(arg).length;
