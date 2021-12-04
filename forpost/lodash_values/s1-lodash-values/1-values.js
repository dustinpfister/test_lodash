let _ = require('lodash');

let obj = {
    foo: 'bar',
    n: 42
};

// lodash _.values can be used to get the values
// for each key of an object
console.log(_.values(obj) ); // [ 'bar', 42 ]
