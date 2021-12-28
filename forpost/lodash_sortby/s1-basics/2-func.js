let _ = require('lodash');

let nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1];
let a = _.sortBy(nums, function (n) {
    if (n > 0) {
        return Math.abs(n) * -1;
    }
    return Math.abs(n);
});
console.log(a);
// [ 42, 52, 27, 158, 5, -5, 7, 6, 3, -1 ]

