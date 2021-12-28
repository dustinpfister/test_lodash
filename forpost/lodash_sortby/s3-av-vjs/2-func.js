// using array sort with a function
let nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1];
let a = nums.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
});
console.log(a);
// [ 158, 52, 42, 27, 7, 6, 5, 3, -1, -5 ]

// compared to sort by itself
console.log(nums.sort());
// [ -1, -5, 158, 27, 3, 42, 5, 52, 6, 7 ]
console.log(nums);
// [ -1, -5, 158, 27, 3, 42, 5, 52, 6, 7 ]



