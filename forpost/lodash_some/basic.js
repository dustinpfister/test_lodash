let _ = require('lodash');

// some arrays
let arr1 = ['foo', null, 42, 'bar'],
arr2 = ['foo', 'man', 'chew'],

// what to test for
tester = function (el) {
    return typeof el === 'number';
};

console.log(_.some(arr1, tester)); // true
console.log(_.some(arr2, tester)); // false
