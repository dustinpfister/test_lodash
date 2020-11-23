let _ = require('lodash');

// Is empty can be used with Object Collections
console.log( _.isEmpty({}) ); // true
console.log( _.isEmpty({x:42}) ); // false

// and Array Object Collections
console.log( _.isEmpty([]) ); // true
console.log( _.isEmpty([12,42,87]) ); // false