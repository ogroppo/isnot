Package.describe({
	summary: "Complete javascript type checking with intuitive global variables",
	version: "1.0.1",
	name: "onestone:isitnot",
	git: "https://github.com/ogroppo/isitnot.git"
});

Package.onUse(function (api) {
    api.addFiles('./lib/arrays.js');
    api.addFiles('./lib/generic.js');
    api.addFiles('./lib/numbers.js');
    api.addFiles('./lib/objects.js');
    api.addFiles('./lib/strings.js');
    api.export(['isArray', 'isEmptyArray', 'isNotEmptyArray'], ['client', 'server']);
    api.export(['isEmpty', 'isNotEmpty'], ['client', 'server']);
    api.export(['isNumber', 'isNotNumber', 'isInt', 'isNotInt'], ['client', 'server']);
    api.export(['isObject', 'isNotObject', 'isEmptyObject', 'isNotEmptyObject'], ['client', 'server']);
    api.export(['isString', 'isNotString', 'isEmptyString', 'isNotEmptyString', 'isEmail', 'isNotEmail'], ['client', 'server']);
});