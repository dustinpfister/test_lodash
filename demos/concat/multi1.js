let _ = require('lodash');

let arr1 = [1, 2, [3, 4, [5, 6]]],

arr2 = [7, 8, 9];

let full = _.concat(arr1,arr2);

console.log(full); // [ 1, 2, [ 3, 4, [ 5, 6 ] ], 7, 8, 9 ]

arr1[2][0] = -1;

console.log(full); // [ 1, 2, [ -1, 4, [ 5, 6 ] ], 7, 8, 9 ]
