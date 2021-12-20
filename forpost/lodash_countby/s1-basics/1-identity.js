let _ = require('lodash');

let arr = [1, 2, 2, 1, 2];
// this also just happens to be the default
let a = _.countBy(arr);
console.log(a);
// { '1': 2, '2': 3 }

// using the identity method
let b = _.countBy(arr, _.identity);
console.log(b);
// { '1': 2, '2': 3 }