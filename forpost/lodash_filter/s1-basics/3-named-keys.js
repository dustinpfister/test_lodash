let _ = require('lodash');

var obj = {
    foo: 'bar',
    bool: false,
    n: 42,
    c: 7
};
// using lodash filter with a plain object with named keys
var numbers = _.filter(obj, function (val, key, obj) {
    return typeof val === 'number';
});
console.log(numbers); // [42,7];