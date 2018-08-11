
_ = require('lodash');

var b = _.fill(_.fill(new Array(8),0), 1, 2, 6);

console.log(b); //[0,0,1,1,1,1,0,0]
