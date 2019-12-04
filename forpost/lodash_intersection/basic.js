let _ = require('lodash');

let arr1 = [1, 4, 5],
arr2 = [1, 2, 1],
arr3 = [1, 4, 5],

result = _.intersection(arr1, arr2, arr3);

console.log(result); // [1]
