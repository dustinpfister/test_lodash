let _ = require('lodash');

let arr = [-1,5,7,-1,-1, 8, 7];
arr = _.pull(arr,-1);
console.log( arr);
// [ 5, 7, 8, 7 ]