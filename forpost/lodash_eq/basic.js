let _ = require('lodash');

console.log( NaN == NaN ); // false
console.log( NaN === NaN ); // false
console.log( _.eq(NaN , NaN) ); // true

console.log( 0 == -0 ); // true
console.log( 0 === -0 ); // true
console.log( Object.is(0 , -0) ); // false