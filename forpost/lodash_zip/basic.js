let _ = require('lodash');

// an array of arrays
var matrix = [
    [1,2,3,4],
    [1,0,5,1],
    [1,0,0,1],
    [2,1,1,3]
];
 
var x = 2, y = 1,
// I can get a single element like this
el = matrix[y][x];
console.log( el ); // 5
 
// just a single array
var matrix = [1,2,3,4,1,0,5,1,1,0,0,1,2,1,1,3],
w = 4;
 
var x = 2, y = 1,
// I can do the same thing with a single array
// if I know the width
el = matrix[ y * w + x];
 
console.log(el); // 5