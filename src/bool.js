export const isBoolean = (arg) =>
  Object.prototype.toString.call(arg) === "[object Boolean]";

export const isNotBoolean = (arg) => !isBoolean(arg);
