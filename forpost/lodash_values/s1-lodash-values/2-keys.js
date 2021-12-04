let _ = require('lodash');

let obj = {
    foo: 'bar',
    n: 42
};

// There is the lodash _.keys that can be used 
// to get object key names as well
console.log(_.keys(obj)); // ['foo', 'n']

// there is also the native Object.values
// that does the same thing
console.log( Object.values(obj) ); // [ 'bar', 42 ]
console.log(Object.keys(obj)); // ['foo', 'n']



