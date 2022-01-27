_ = require('lodash');

let a = [1, 2, 3, 4];
let b = _.slice(a, 3, 4)[0];
console.log(b); // 4
console.log(a); // [1, 2, 3, 4]