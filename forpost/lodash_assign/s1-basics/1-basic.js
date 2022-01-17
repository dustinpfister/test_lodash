let _ = require('lodash');

let a = {x: 5};
// 
_.assign(a, {y: 7}, {w: 32, h: 32});
console.log(a);
// { x: 5, y: 7, w: 32, h: 32 }