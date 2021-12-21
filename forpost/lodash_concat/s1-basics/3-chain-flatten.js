let _ = require('lodash');

// array a as an array of arrays
let a = [
  [1,2,3],
  [4,5,6]
];
// array b as a array of numbers
let b = [7,8,9];
// using lodash chain with flatten, concat, and value to
// get a single array of numbers
let c = _.chain(a).flatten().concat(b).value();
console.log(c);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
