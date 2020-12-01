let _ = require('lodash');

let a =  [1,2,3,4];
let b = _.slice(a, 1, 3);

console.log(a); // [ 1, 2, 3, 4 ]
console.log(b); // [ 2, 3]