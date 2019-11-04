let _ = require('lodash');
// s source object
let source = {
    x: 1,
    y: 2,
    z: {
        val: 42,
        mess: 'foo'
    }
};
// creating new objects with _.merge, and _.assign
let m = _.merge({}, source),
a = _.assign({}, source);
// changing a value in nested object of the source object
source.z.val = 0;
// new object created with _.merge is not effected
// by the change to the source object while the new
// object created with _.assign is
console.log(m.z.val); // 42
console.log(a.z.val); // 0
