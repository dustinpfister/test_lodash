let _ = require('lodash');

let arr = [-1, 5, 7, -1, -1, 8, 7];

// lodash \_.remove and \_.eq can be used also to do
// the same thing more or less
arr = _.remove(arr, function (el) {
        return !_.eq(el, -1);
    });

console.log(_.join(arr, ':'));
// 5:7:8:7

// remove can also be used to define any custom
// logic for removing elements

var arr1 = _.remove([-1, 1, -5, -7, 2, 3], function (el) {
        return !(el < 0);
    });
console.log(_.join(arr1, ':'));
// '1:2:3'