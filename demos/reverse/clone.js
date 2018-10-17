let _ = require('lodash');

let arr = [1,2,3,4];
let arr2 = _.reverse(_.clone(arr));

console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr2); // [ 4, 3, 2, 1 ]
