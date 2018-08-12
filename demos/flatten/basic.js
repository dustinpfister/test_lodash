let _ = require('lodash');

let grid = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
];

let flat = _.flatten(grid);

console.log( flat ); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]