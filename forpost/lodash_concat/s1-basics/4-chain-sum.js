let _ = require('lodash');

// array a as an array of arrays
let a = [
  [0,[1,0]],
  [[0,1],1]
];
// array b as a array of numbers
let b = [1,[ 0,1 ]];

let c = 1;


let d = _.chain(a).concat(b, c).flattenDeep().sum().value();
console.log(d);
// 6
