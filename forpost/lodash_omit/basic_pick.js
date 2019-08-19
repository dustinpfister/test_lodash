let _ = require('lodash');

let obj = {
    index: 0,
    x: 5,
    y: 12,
    z: 3
};

console.log(_.pick(obj, ['x', 'y']));
// { x: 5, y: 12 }
