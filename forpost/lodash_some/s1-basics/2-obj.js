let _ = require('lodash');

let testType = function (type) {
    type = type || 'number';
    return function (el) {
        return typeof el === type;
    };
};
// lodash some works fine with plain Objects
let obj = {
    foo: 42,
    bar: 10
};
console.log( _.some(obj, testType('number')) ); // true
console.log( _.some(obj, testType('string')) ); // false
