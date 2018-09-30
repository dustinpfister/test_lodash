let _ = require('lodash');

let obj = {};

Object.defineProperty(obj, 'not_enumerable', {
    value: 42,
    enumerable: false
});

//console.log(obj.not_enumerable);

/*
// _.forEach
_.forEach(obj, function (val, key) {

    console.log(key + ':' + val);

});
*/

console.log(Object.getOwnPropertyNames(obj));
