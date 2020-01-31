let _ = require('lodash');


let arr = ['a','b','c'];

console.log( arr.includes(42) ); // false
console.log( arr.includes('d') ); // false
console.log( arr.includes('c') ); // true

console.log( _.includes(arr,42) ); // false
console.log( _.includes(arr,'d') ); // false
console.log( _.includes(arr,'c') ); // true