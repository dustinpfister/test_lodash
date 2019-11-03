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

// using cloneDeep to clone the object
let a = _.cloneDeep(obj);

// changing a value of the nested object
a.point.x = 0;
a.point.y = 0;

// This effects the cloned object
// as well as the original because the
// nested object is still referenced rather than
// copied
console.log(obj.point.x, obj.point.y); // 54 127
console.log(a.point.x, a.point.y); // 0 0