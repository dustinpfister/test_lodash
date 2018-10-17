let _ = require('lodash');

let arr = ['foo', 'bar', 'man', 42];

// ['foo', 'bar', 'man', 42]
let arr2 = arr.sort(function (a, b) {

    return a > b ? 0 : 1;

});

console.log(arr2); // [ 42, 'man', 'foo', 'bar' ]
