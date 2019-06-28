let _ = require('lodash');

// the same can be done as
// with repeat
let str = '1';
_.times(9, () => {
    str += '0';
});
console.log(str);
// 1000000000

// but it can also be used
// with anything that can be
// placed in a function
let arr = [1, 2, 3],
str2 = '';
_.times(3, () => {
    str2 += _.join(arr, ',') + ',';
});
let arr2 = _.dropRight(_.split(str2,','),1);
console.log(arr2);
