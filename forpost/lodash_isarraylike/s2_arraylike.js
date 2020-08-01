let _ = require('lodash');

let obj = {
    length: 0
},
arr = [];

console.log( _.isArray(obj) ); // false
console.log( _.isArray(arr) ); // true

console.log( _.isArrayLike(obj) ); // true
console.log( _.isArrayLike(arr) ); // true