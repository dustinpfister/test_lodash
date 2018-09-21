let _ = require('lodash');

let grid3 = [
   [[1,2,3],[4,5,6],[7,8,9]],
   [[10,11,12],[13,14,15],[16,17,18]],
   [[19,20,21],[22,23,24],[25,26,27]],
];

let grid2 = _.flattenDepth(grid3,1);
let grid = _.flattenDepth(grid3,2);

// just one level
console.log( grid2 );
/*
[ [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 11, 12 ],
  [ 13, 14, 15 ],
  [ 16, 17, 18 ],
  [ 19, 20, 21 ],
  [ 22, 23, 24 ],
  [ 25, 26, 27 ] ]
*/

// all the way to linear
console.log( grid );
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]