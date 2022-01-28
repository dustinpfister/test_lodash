let _ = require('lodash');

let a = _.chain(',1,2,3,4,').split(',').compact().map((n) => Math.pow(2, n) ).join(' ').value();
console.log(a);
// 2 4 8 16