let _ = require('lodash');

let arr = [];
// no way to set a default if undefined or empty
console.log( _.first(arr) ); // undefined
// with lodash get a default can be set
console.log( _.get(arr, '0', 0) ); // 0
