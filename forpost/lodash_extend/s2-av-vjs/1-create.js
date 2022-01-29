let _ = require('lodash');

let a = Object.create({
    foo: 'bar'
});

console.log( Object.keys( a )); // []
console.log( Object.keys( Object.getPrototypeOf(a) )); // ['foo']
console.log( a.prototype); // undefined
