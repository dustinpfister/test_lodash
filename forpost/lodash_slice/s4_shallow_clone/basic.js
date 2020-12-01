let _ = require('lodash');

let a = [1, 2, 3, 4];
let b = _.slice(a, 0, a.length);

b = _.map(b, (n)=> { return Math.pow(2, n); } );

console.log(b); // [ 2, 4, 8, 16 ]
// a is unchanged
console.log(a); // [ 1, 2, 3, 4, ]