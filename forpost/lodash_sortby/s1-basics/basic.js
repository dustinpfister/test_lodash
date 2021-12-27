let _ = require('lodash');

let nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1];

console.log(_.sortBy(nums));
//[ -5, -1, 3, 5, 6, 7, 27, 42, 52, 158 ]
// using a function gives the same result
console.log(_.sortBy(nums, (n)=>{
    return n;
}));
// does not mutate in place
console.log(nums);


let lessThanTen = _.sortBy(nums, function (n) {
  return n < 10;
});

console.log(lessThanTen);
// [ 42, 52, 27, 158, 5, -5, 7, 6, 3, -1 ]


