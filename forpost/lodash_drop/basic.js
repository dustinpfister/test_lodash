let _ = require('lodash');
let arr = [1,2,3,4,5,6],
newArr = _.drop(arr,3);
// the new Array is what remains
console.log(newArr); // [4,5,6]
// the original array is unchanged
console.log(arr); // [1,2,3,4,5,6]