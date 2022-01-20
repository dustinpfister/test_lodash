let _ = require('lodash');

let obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

console.log( _.isArrayLike(obj) ); // true