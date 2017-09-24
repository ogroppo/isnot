# isitnot
Type checking package for JavaScript

## Available (global) functions

### Arrays

~~~js
isArray([]) // true

isArray({}) // false

isEmptyArray([]) // true

isEmptyArray(['1']) // false

isNotEmptyArray([]) // false
~~~

### Objects

~~~js
isObject([]) // FALSE, arrays are not objects for this library

isObject({}) // true

isNotObject('') //true

isEmptyObject([]) //false

isNotEmptyObject({a: 1}) //true
~~~

### Strings

~~~js
isString('') //true

isNotString(()=>{}) //true

isEmptyString({}) //false

isEmptyString('') //true

isNotEmptyString('') //false

isEmail('a@b.c') //true

isNotEmail('whatever@domain') //true
~~~

### Numbers

~~~js
isNumber(1) //true

isNotNumber(NaN) //true

isInt(0) //true

isNotInt(1.2) //true
~~~

### Generic

~~~js
isEmpty([]) //true

isEmpty('') //true

isEmpty({}) //true

isNotEmpty('hey') //true
~~~
