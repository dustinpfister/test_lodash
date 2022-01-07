let _ = require('lodash');

let xor = _.xor([3,1], [1,2], [2,2,0]);

console.log(xor);
// [3, 0]