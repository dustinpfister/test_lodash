let _ = require('lodash');

let arr = _.union([1, 2, 3], [6], [3, 2, 4, 1], [5, 4]);

console.log( _.sortBy(arr) );
// [1,,3,4,5,6]