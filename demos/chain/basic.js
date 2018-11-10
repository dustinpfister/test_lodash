let _ = require('lodash');

let arr = _.chain([1, 2, 3, 4])
    .map(function (n) {
        return Math.pow(2, n);
    }).reverse();

console.log(arr.value()); // [ 16, 8, 4, 2 ]
