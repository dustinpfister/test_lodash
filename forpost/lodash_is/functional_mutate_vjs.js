let arr = [1,2,3,4];
// In native javaScript there is also
// Array.prototype.slice that is functional
let arr2 = arr.slice(1, 3);
console.log(arr2); // [2,3]
console.log(arr); // [1,2,3,4]

// but then there are methods like splice
// that are not functional as it mutates the
// given array
let arr3 = arr.splice(1,2);
console.log(arr3); // [2,3]
console.log(arr); // [1,4]