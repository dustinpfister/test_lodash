let _ = require('lodash');
// test an array of types
let testType = function (types) {
    types = types || ['number'];
    return function (el) {
        let i = types.length;
        while (i--) {
            let typeStr = types[i];
            if (typeof el === typeStr) {
                return true;
            }
        }
        return false;
    };
};
let obj = {
    foo: 42,
    bar: 10,
    chew: 'foo'
};
// lodash some will return true of just one element meets
// a given condition, while every will only return true of all elements
// meet a given condition
console.log(_.some(obj, testType(['number']))); // true
console.log(_.every(obj, testType(['number']))); // false
console.log(_.every(obj, testType(['number', 'string'])) ); // true
