let _ = require('lodash');

let a = _.chain('This is some Text').words().value();
console.log(a);
// 2 4 8 16