let _ = require('lodash');

let a = {x: 5};
// One way to not mutate an object in place is to make the
// first object a new object
let b = _.assign({}, a, {y: 7}, {w: 32, h: 32});
console.log(a);
// { x: 5 }
console.log(b);
// { x: 5, y: 7, w: 32, h: 32 }