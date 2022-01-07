let _ = require('lodash');

let a = [ [3, 1], [1, 2], [2, 2, 0, 1] ];

let b = _.xor.apply(null, a);
let c = _.intersection.apply(null, a);

console.log(b);
// [ 3, 0 ]

console.log(c);
// [ 1 ] 

