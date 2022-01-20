let _ = require('lodash');

let a = {
    0: 1,
    1: 2,
    2: 3
};
Object.defineProperty(a, 'length', {value: Object.keys(a).length});
 
console.log( _.isArray(a) ); // false
console.log( _.isArrayLike(a) ); // true