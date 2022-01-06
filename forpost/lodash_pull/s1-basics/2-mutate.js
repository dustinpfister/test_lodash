let _ = require('lodash');

let source = [-1,5,7,-1,-1, 8, 7];
b = _.pull(source,-1);
// pull will mutate the source array in place
console.log( source );
// [ 5, 7, 8, 7 ]
console.log( b );
// [ 5, 7, 8, 7 ]
