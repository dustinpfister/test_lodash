let _ = require('lodash');

let testType = function (type) {
    type = type || 'number';
    return function (el) {
        return typeof el === type;
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
console.log( _.some(obj, testType('number')) ); // true
console.log( _.every(obj, testType('number')) ); // false
console.log( _.every(obj, function(el){ return typeof el === 'number' || typeof el === 'string'}) ); // true
