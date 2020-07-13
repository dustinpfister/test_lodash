let _ = require('lodash');

var str = 1 + _.fill(new Array(8),'0').join('');;
console.log(str); // '100000000'