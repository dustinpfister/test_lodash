let _ = require('lodash');

let nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1];

//console.log(nums.sort(function (a, b) {

//        return a < b ? -1 : 1;

//    }));

//[ -5, -1, 3, 5, 6, 7, 27, 42, 52, 158 ]


let lessThanTen = nums.sort(function (a,b) {

return  a < 10 && b > 10 ? 1: -1;

});

console.log(lessThanTen);
// [ 42, 52, 27, 158, 5, -5, 7, 6, 3, -1 ]


