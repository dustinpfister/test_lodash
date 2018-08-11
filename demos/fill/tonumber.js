let _ = require('lodash');

var b = _.join(_.fill(_.fill(new Array(8),0), 1, 2, 6),'');

// back again with _.split
console.log(parseInt(b,2)); // 60
