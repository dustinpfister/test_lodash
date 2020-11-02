let _ = require('lodash');

let atan2 = _.rearg(Math.atan2, [1, 0]);

let x = 45,
y = 20;

console.log( Math.atan2(y, x) ); // 0.41822432957922906
console.log( atan2(x,y) );  // 0.41822432957922906
