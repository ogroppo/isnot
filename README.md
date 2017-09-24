# isitnot
Type checking package for JavaScript

## Available (global) functions

### Arrays

isArray([]) // true
isArray({}) // false

isEmptyArray([]) // true
isEmptyArray(['1']) // false

isNotEmptyArray([]) // false

### Objects

isObject([]) // FALSE, arrays are not objects for this library
isObject({}) // true

isNotObject('') //true

isEmptyObject([]) //false

isNotEmptyObject({a: 1}) //true

### Strings

isString('') //true

isNotString(()=>{}) //true

isEmptyString({}) //false
isEmptyString('') //true

isNotEmptyString('') //false

isEmail('a@b.c') //true

isNotEmail('whatever@domain') //true

### Numbers

isNumber(1) //true

isNotNumber(NaN) //true

isInt(0) //true

isNotInt(1.2) //true

### Generic

isEmpty([]) //true
isEmpty('') //true
isEmpty({}) //true

isNotEmpty('hey') //true
