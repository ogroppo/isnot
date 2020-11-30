export const isNumber = (arg) => typeof arg === "number" && isFinite(arg);

export const isNotNumber = (arg) => !isNumber(arg);

export const isInt = (arg) => Number.isInteger(arg);

export const isNotInt = (arg) => !isInt(arg);

export const isEven = (arg) => isInt(arg) && !(arg % 2);

export const isOdd = (arg) => isInt(arg) && !!(arg % 2);

export const isPositive = (arg) => isInt(arg) && arg > 0;

export const isNotPositive = (arg) => isNotInt(arg) || arg < 1;
