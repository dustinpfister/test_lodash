let _ = require('lodash');

// Booleans
console.log( _.isEmpty(true) ); // true
console.log( _.isEmpty(false) ); // true

// Numbers
console.log( _.isEmpty(123) ); // true
console.log( _.isEmpty(0) ); // true
console.log( _.isEmpty(-123) ); // true
console.log( _.isEmpty(NaN) ); // true
console.log( _.isEmpty(Infinity) ); // true

// Strings
console.log( _.isEmpty('') ); // true
console.log( _.isEmpty('foo') ); // false

// Other
console.log( _.isEmpty(null) ); // true
console.log( _.isEmpty(undefined) ); // true