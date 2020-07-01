let _ = require('lodash');

let a = [1,2,'b',3];

let test = (el)=> typeof el === 'string';

console.log( _.reject(a, test ) ); // [1,2,3]

console.log( _.filter(a, test ) ); // ['b']