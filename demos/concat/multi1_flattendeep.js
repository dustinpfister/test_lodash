let _ = require('lodash');

let arr1 = [1, 2, [3, 4, [5, 6]]],

arr2 = [7, 8, 9];

let full = _.flattenDeep(_.concat(arr1, arr2));

console.log(full); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

