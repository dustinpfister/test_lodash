let _ = require('lodash');

let arr = _.times(4, (i) => Math.pow(2, i));

console.log(arr); //[1,2,4,8]