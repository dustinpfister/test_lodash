// An array with three public keys and a private length property
let a = [1, 2, 3];
console.log( Object.keys(a) );
// [ '0', '1', '2' ]
 
// A collection formated like an array, but all own properties are public
let b = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log( Object.keys(b) );
// [ '0', '1', '2', 'length' ]
 
// A collection formated like an array, and also the length property is made private
// by making use of the Object.defineProperty method
let c = { 0: 1, 1: 2, 2: 3};
Object.defineProperty(c, 'length', {value: 3});
console.log(Object.keys(c));
// [ '0', '1', '2' ]