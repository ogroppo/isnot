import { isName } from "./strings";

export const isArray = (arg) => Array.isArray(arg);

export const isNotArray = (arg) => !Array.isArray(arg);

export const isEmptyArray = (arg) => isArray(arg) && !arg.length;

export const isNotEmptyArray = (arg) => isArray(arg) && !!arg.length;

export const isArrayOfNames = (arg) =>
  isNotEmptyArray(arg) && arg.every((el) => isName(el));
