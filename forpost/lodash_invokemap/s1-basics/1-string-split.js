let _ = require('lodash');

let nums = [123,456,789];
let a = _.invokeMap(nums, ''.split, '');
console.log(a);
// [ [ '1', '2', '3' ], [ '4', '5', '6' ], [ '7', '8', '9' ] ]

