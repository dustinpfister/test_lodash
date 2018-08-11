let _ = require('lodash');

// to string with \_.join
var b = _.join(_.fill(new Array(8),0),'');
console.log(b); // '00000000'

// back again with _.split
console.log(_.split(b,''));
