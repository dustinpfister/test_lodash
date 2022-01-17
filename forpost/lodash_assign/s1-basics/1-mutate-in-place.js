let _ = require('lodash');

let a = {x: 5};
// if I have an object before hand, and I pass that object
// as the first argument that object will be mutated in place
_.assign(a, {y: 7}, {w: 32, h: 32});
console.log(a);
// { x: 5, y: 7, w: 32, h: 32 }