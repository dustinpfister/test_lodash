let _ = require('lodash');

let a = _.split(',1,2,3,', ',');
console.log(a);
// [ '', '1', '2', '3', '' ]