let _ = require('lodash');

let arr = [1,2,3,4];
let arr2 = _.slice(arr, 1, 3);

// returns a new array
console.log(arr2); // [2,3]

// does not mutate the old array
console.log(arr); // [1,2,3,4]
