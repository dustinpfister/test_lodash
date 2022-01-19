let _ = require('lodash');

let a = { b: { c: 8, d: 7,  e: [ 1, 2, 3 ] }, f: [ 4, 5, 6 ] };

console.log( _.get(a, 'b.c') );   // 8
console.log( _.get(a, 'f.2') );   // 6
console.log( _.get(a, 'b.e.0') ); // 1
console.log( _.get(a, 'g', 0) );  // 0