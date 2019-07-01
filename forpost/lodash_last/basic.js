_ = require('lodash');

let arr = [1, 2, 3, 4],
last = _.last(arr);
// this will give the last argument
// and will leave the array unchanged
console.log(last); // 4
console.log(arr); // [1,2,3,4]
