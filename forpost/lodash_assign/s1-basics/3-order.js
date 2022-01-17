let _ = require('lodash');

let a = _.assign({w: 0, h: 0}, {w: 32}, {w: 64, h: 64});
console.log(a);
// { w: 64, h: 64 }
