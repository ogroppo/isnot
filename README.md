# isnot

Beautifully documented type checking package for JavaScript.

## Usage

To use the functions just do:

` var {isString, isArray} = require('isnot'); `

## TOC

* [Strings](#Strings)
	* [String](#String)
		* [isString](#isString)
		* [isNotString](#isNotString)
	* [Empty String](#Empty String)
		* [isEmptyString](#isEmptyString)
		* [isNotEmptyString](#isNotEmptyString)
	* [Name](#Name)
		* [isName](#isName)
		* [isNotName](#isNotName)
	* [Email](#Email)
		* [isEmail](#isEmail)
		* [isNotEmail](#isNotEmail)
	* [Variable Name](#Variable Name)
		* [isVariableName](#isVariableName)
		* [isNotVariableName](#isNotVariableName)
	* [URL](#URL)
		* [isURL](#isURL)
		* [isNotURL](#isNotURL)
	* [ISO Date](#ISO Date)
		* [isISODate](#isISODate)
		* [isNotISODate](#isNotISODate)
* [Arrays](#Arrays)
	* [Array](#Array)

### Strings <a name="Strings"></a>

#### String <a name="String"></a>

Corresponds to the js string primitive

###### isString <a name="isString"></a>

~~~js
isString('') //true
~~~

###### isNotString <a name="isNotString"></a>
~~~js
isNotString(()=>{}) //true
~~~

#### Empty String <a name="Empty String"></a>

An empty string is only `''`

###### isEmptyString <a name="isEmptyString"></a>

Purely checks if the string is empty

~~~js
isEmptyString({}) //false

isEmptyString('') //true

isEmptyString(' ') //false

~~~

###### isEmptyString <a name="isEmptyString"></a>
~~~js
isNotEmptyString('') //false
~~~

#### Name <a name="Name"></a>

A name is a string that is just not empty space.

###### isName <a name="isName"></a>
~~~js
isName('') //false

isName(' ') //false

isName('\r') //false

isName(123) //false

isName('hey') //true
~~~

###### isNotName <a name="isNotName"></a>
~~~js
isNotName('') //true

isNotName(' ') //true

isNotName('\n') //true

isNotName([]) //true

isNotName({}.toString()) //false
~~~

#### Email <a name="Email"></a>

###### isEmail <a name="isEmail"></a>
~~~js
isEmail('a@b.c') //true
~~~

###### isNotEmail <a name="isNotEmail"></a>
~~~js
isNotEmail('missing@dot') //true

isNotEmail('missing.domain') //true
~~~

#### Variable Name <a name="Variable Name"></a>

###### isVariableName <a name="isVariableName"></a>
~~~js

isVariableName('var') //true (technically not, but it can be a property of an object accessed without ['...'])

isVariableName('oh dear') //false

isVariableName('0rel') //false cannot start with number

isVariableName('var0') //true
~~~

###### isNotVariableName <a name="isNotVariableName"></a>
~~~js
isNotVariableName('a@a') //true

isNotVariableName('--var--') //true
~~~

#### URL <a name="URL"></a>

###### isURL <a name="isURL"></a>
~~~js
isURL('https://localhost') //true

isURL('www.site.com') //true
~~~

###### isNotURL <a name="isNotURL"></a>
~~~js
isNotURL('a@a') //true

isNotURL('site.com') //false
~~~

#### ISO String <a name="ISO String"></a>

###### isISOString <a name="isISOString"></a>
~~~js
isISOString(new Date().toISOString()) //true

isISOString('2017-06-01T18:43:26.000-02:00') //true

isISOString('2017-06-01T18:43:26.000Z') //true
~~~

###### isNotISOString <a name="isNotISOString"></a>
~~~js
isNotISOString('2017-06-01') //true

isNotISOString('2017/06/01') //true

isNotISOString('2017/06/01T18:43:26.000-02:00') //true

isNotISOString(new Date().toString()) //true
~~~

### Arrays <a name="Arrays"></a>

#### Array <a name="Array"></a>

~~~js
isArray([]) // true

isArray({}) // false

isEmptyArray([]) // true

isEmptyArray({}) // false

isNotEmptyArray([]) // false

isNotEmptyArray([1]) // true

isNotEmptyArray({}) // false
~~~

### Objects

~~~js
isObject([]) // FALSE, arrays are not objects for this library

isObject({}) // true

isNotObject('') //true

isEmptyObject([]) //false

isNotEmptyObject({a: 1}) //true
~~~

### Numbers

~~~js
isNumber(1) //true

isNotNumber(NaN) //true

isInt(0) //true

isNotInt(1.2) //true
~~~

### Bool

~~~js
isBool(1) //false

isNotBool(NaN) //true

isBool(0) //false

isBool(true) //true
~~~

### Generic

~~~js
isEmpty([]) //true

isEmpty('') //true

isEmpty(' ') //true

isEmpty({}) //true

isEmpty(null) //true

isEmpty(undefined) //true

isEmpty(0) //false

isNotEmpty('hey') //true
~~~

### Dates

~~~js
isDate('') //false

isNotDate('') //true

isDate(new Date()) //true

isDate('1970-01-01T00:00:00.000Z') //true

isDate('1970-01-01T00:00:00') //true

isDate('1970-01-01T00:00') //true

isDate('1970-01-01') //true

isDate('0000-00-00') //false

isDate('1970-13-01') //false (bad month)

isDate('1970-01-32') //false (bad day)

isDate('2017-02-29') //false (not leap year)
~~~

### undefined

~~~js
isUndefined('') //false

isUndefined(false) //false

isUndefined(undefined) //true

isUndefined(typeof undefined) //false

isUndefined({}.inventedProp) //true
~~~
