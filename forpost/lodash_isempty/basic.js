let _ = require('lodash');

let obj = {},
obj2 = {x:42};

console.log( _.isEmpty(obj) ); // true
console.log( _.isEmpty(obj2) ); // false