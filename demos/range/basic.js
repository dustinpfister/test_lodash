let _ = require('lodash');

let nums = _.range(10);

console.log(nums); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


nums = _.range(5,10);

console.log(nums); // [5,6,7,8,9]


nums = _.range(100,200,20);

console.log(nums); //  [ 100, 120, 140, 160, 180 ]
