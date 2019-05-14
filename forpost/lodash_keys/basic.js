let _ = require('lodash');

let obj = {
    foo: 'bar',
    n: 42
};

// lodash _.keys can be used to get the keys
// for each key of an object
console.log(_.keys(obj) ); // ['foo', n]

// there is also the native Object.keys
// that does the same thing
console.log( Object.keys(obj) ); // ['foo', n]

// There is the lodash _.values, and Native Object.values
// that can be used to get object value of the keys as well
console.log(_.values(obj)); // [ 'bar', 42 ]
console.log(Object.values(obj)); // [ 'bar', 42 ]

