let _ = require('lodash');


let arr = ['a','b','c'];
console.log( _.includes(arr, 42) ); // false
console.log( _.includes(arr, 'd') ); // false
console.log( _.includes(arr, 'c') ); // true
