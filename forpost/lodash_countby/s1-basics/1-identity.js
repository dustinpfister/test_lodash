let _ = require('lodash');

let arr = [1, 2, 2, 1, 2];
let obj = _.countBy(arr, _.identity);
console.log(obj);
// { '1': 2, '2': 3 }