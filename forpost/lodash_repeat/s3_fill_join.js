let _ = require('lodash');

let str = 1 + _(new Array(8)).fill('0').join('');
console.log(str); // '100000000'