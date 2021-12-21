let _ = require('lodash');

// array a
let a = [
  [0,[1,0]],
  [[0,1],1]
];
// array b
let b = [1,[ 0,1 ]];
// number c
let c = 1;
// using concat flatten deep, and lodash sum methods
let d = _.chain(a).concat(b, c).flattenDeep().sum().value();
console.log(d);
