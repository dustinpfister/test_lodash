let _ = require('lodash');


console.log(  _.eq(NaN, NaN) ); // true ( 7.2.10 SameValueZero )
console.log( Object.is(NaN, NaN) ); // true ( 7.2.9 SameValue)
console.log(  NaN === NaN ); // false

// The main difference between SamveValueZero and SameValue is how
// +0 and -0 are treated
console.log( _.eq(0, -0) );      // true
console.log( Object.is(0, -0) ); // false
