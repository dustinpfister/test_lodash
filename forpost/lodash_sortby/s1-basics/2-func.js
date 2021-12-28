let _ = require('lodash');

// using sortBy method by giving a function with
// custom sort logic
let nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1];
let a = _.sortBy(nums, function (n) {
    if (n > 0) {
        return Math.abs(n) * -1;
    }
    return Math.abs(n);
});
console.log(a);
// [ 158, 52, 42, 27, 7, 6, 5, 3, -1, -5 ]

// compare to just using _.sortBy with the 
// source array itself, also the sortBy method
// will not mutate the source array in place
console.log(_.sortBy(nums));
// [ -5, -1, 3, 5, 6, 7, 27, 42, 52, 158 ]
console.log(nums);
// [ 5, 42, -5, 7, 6, 3, 52, 27, 158, -1 ]

