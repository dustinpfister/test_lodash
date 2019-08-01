let _ = require('lodash');
// two arrays one has nothing but numbers
// the other has a single element that is
// a string.
let arr1 = [1, 2, 3, 4],
arr2 = [1, 2, 'c', 4],
// a method that can be used to test
// if all elements are a number
tester = (el) => {
    return typeof el === 'number';
};
// using the tester method with _.every
console.log(_.every(arr1, tester)); // true
console.log(_.every(arr2, tester)); // false
