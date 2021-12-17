_ = require('lodash');

// https://github.com/photonstorm/phaser/blob/master/src/math/Wrap.js
_.mixin({'wrapNumber': function(n, min, max){
    var r = max - min;
    return (min + ((((n - min) % r) + r) % r));
}});

// to high
console.log( _.wrapNumber(6, -5, 5) ); // -4
console.log( _.wrapNumber(5, -5, 5) ); // -5

// in range
console.log( _.wrapNumber(4, -5, 5) ); // 4
console.log( _.wrapNumber(3, -5, 5) ); // 3
console.log( _.wrapNumber(2, -5, 5) ); // 2
console.log( _.wrapNumber(1, -5, 5) ); // 1
console.log( _.wrapNumber(0, -5, 5) ); // 0
console.log( _.wrapNumber(-1, -5, 5) ); // -1
console.log( _.wrapNumber(-2, -5, 5) ); // -2
console.log( _.wrapNumber(-3, -5, 5) ); // -3
console.log( _.wrapNumber(-4, -5, 5) ); // -4
console.log( _.wrapNumber(-5, -5, 5) ); // -5

// to low
console.log( _.wrapNumber(-6, -5, 5) ); // 4
console.log( _.wrapNumber(-7, -5, 5) ); // 3
