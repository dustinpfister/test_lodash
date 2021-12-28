let nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1];
let a = nums.sort();
// by default the sort method will not sort values by number
// value
console.log(a);
// [ -1, -5, 158, 27, 3, 42, 5, 52, 6, 7 ]
// this will mutate in place
console.log(nums);
// [ -1, -5, 158, 27, 3, 42, 5, 52, 6, 7 ]

