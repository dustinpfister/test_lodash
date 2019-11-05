let _ = require('lodash');

let nums = [1, 2, 3, 4];
let obj = _.keyBy(nums, (num) => {
        return String.fromCharCode(64 + num);
    });

console.log(obj);
// { A: 1, B: 2, C: 3, D: 4 }