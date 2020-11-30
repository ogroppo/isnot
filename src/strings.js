export const isString = (arg) => typeof arg === "string";

export const isNotString = (arg) => !isString(arg);

export const isEmptyString = (arg) => isString(arg) && !arg;

export const isNotEmptyString = (arg) => !isEmptyString(arg);

export const isName = (arg) => isString(arg) && !!arg.trim();

export const isNotName = (arg) => !isName(arg);

export const isEmail = (arg) => isString(arg) && /\S+@\S+\.\S+/.test(arg);

export const isNotEmail = (arg) => !isEmail(arg);

export const isVariableName = (arg) =>
  !!arg && new RegExp("^[a-zA-Z_$][0-9a-zA-Z_$]*$").test(arg);

export const isNotVariableName = (arg) => !isVariableName(arg);

export const isURL = (arg) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!arg && pattern.test(arg);
};

export const isNotURL = (arg) => !isURL(arg);

export const isISOString = (arg) =>
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|[+-]\d{2}:\d{2})$/.test(arg);

export const isNotISOString = (arg) => !isISOString(arg);

export const isUUID = (arg) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    arg
  );

export const isNotUUID = (arg) => !isUUID(arg);
