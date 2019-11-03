let _ = require('lodash');

// here I have an object with a nested object in it
let obj = {
    point: {
        x: 54,
        y: 127
    },
    mess: 'foobar',
    n: 42
};

let a = _.clone(obj);

a.point.x = 0;
a.point.y = 0;

console.log(obj.point.x, obj.point.y);
console.log(a.point.x, a.point.y);