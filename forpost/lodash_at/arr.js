let _ = require('lodash');

let colors = [
    {a: 255,r: 128,b: 0,g: 64},
    {a: 255,r: 32,b: 32,g: 0},
    {a: 255,r: 28, b: 28,g: 28}
];

let cArr = _.map(colors, (color) => {
        return _.at(color, ['r', 'g', 'b', 'a']);
    });

console.log(cArr);
