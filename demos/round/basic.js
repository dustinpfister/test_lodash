let _ = require('lodash');

// so _.round works just fine for just rounding a number...
console.log(_.round(Math.PI)); // 3

// But so does Math.round.
console.log(Math.round(Math.PI)); // 3

// however _.round can make use of a precision argument
console.log(_.round(Math.PI,2)); // 3.14

// where is Math.round out of the box does not
console.log(Math.round(Math.PI,2)); // 3
