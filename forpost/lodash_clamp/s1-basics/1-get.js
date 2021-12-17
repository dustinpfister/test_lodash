_ = require('lodash');
// using the get get method
var arr = [1, 2, 3];
console.log( _.get(arr, -1, 0) ); // 0
console.log( _.get(arr, 2, 0) );  // 3
console.log( _.get(arr, 3, 0) );  // 0