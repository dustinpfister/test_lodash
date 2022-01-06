let _ = require('lodash');

// a source array
let source = [-1,5,7,-1,-1, 8, 7];
 
// creating a new array and not mutating in place by using without in place of pull
let b =  _.without(source, -1);
console.log( source );
// [ -1, 5, 7, -1, -1, 8, 7 ]
console.log( b );
// [ 5, 7, 8, 7 ]