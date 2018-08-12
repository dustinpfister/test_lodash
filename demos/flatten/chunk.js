let _ = require('lodash');

let flat = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

let grid = _.chunk(flat,3);

console.log( grid ); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]