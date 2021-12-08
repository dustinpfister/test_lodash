let _ = require('lodash');

let colors = [
    {a: 255,r: 128,b: 0,g: 64},
    {a: 255,r: 32,b: 32,g: 0},
    {a: 255,r: 28, b: 28,g: 28}
];

// _.map and _.at can be used to create an array
// of arrays
let cArr = _.map(colors, (color) => {
        return _.at(color, ['r', 'g', 'b', 'a']);
    });
console.log(cArr);
// [ [ 128, 64, 0, 255 ], [ 32, 0, 32, 255 ], [ 28, 28, 28, 255 ] ]

// a single color can be obtained by changing the path values
console.log( _.at(colors, ['[1].r', '[1].g', '[1].b', '[1].a']) );
// [ 32, 0, 32, 255 ]