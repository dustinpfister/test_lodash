let _ = require('lodash');

let color = {
    a: 255,
    r: 128,
    b: 0,
    g: 64
};

let cArr = _.at(color, ['r','g','b', 'a']);

console.log(cArr);
