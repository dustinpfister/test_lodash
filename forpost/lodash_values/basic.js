let _ = require('lodash');

let obj = {
    foo: 'bar',
    n: 42
};

// lodash _.values can be used to get the values
// for each key of an object
console.log(_.values(obj) ); // [ 'bar', 42 ]

// there is also the native Object.values
// that does the same thing
console.log( Object.values(obj) ); // [ 'bar', 42 ]

// There is the lodash _.keys, and Native Object.keys
// that can be used to get object key names as well
console.log(_.keys(obj)); // ['foo', n]
console.log(Object.keys(obj)); // ['foo', n]

