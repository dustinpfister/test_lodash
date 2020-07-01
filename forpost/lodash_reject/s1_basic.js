let _ = require('lodash');

let arr = [1, 2, 'foo', 3, 'bar', true, null, 4, {}, NaN];

let nums = _.reject(arr, (el) => {
        return typeof el != 'number' || String(el) === 'NaN';
    });

console.log(nums); // [1,2,3,4]
