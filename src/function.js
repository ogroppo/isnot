export const isFunction = (arg) =>
  Object.prototype.toString.call(arg) === "[object Function]";

export const isNotFunction = (arg) => !isFunction(arg);

export const isPromise = (arg) => arg instanceof Promise;

export const isNotPromise = (arg) => !isPromise(arg);
