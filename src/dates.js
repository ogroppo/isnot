export const isDate = (arg) =>
  Object.prototype.toString.call(arg) === "[object Date]";

export const isNotDate = (arg) => !isDate(arg);
