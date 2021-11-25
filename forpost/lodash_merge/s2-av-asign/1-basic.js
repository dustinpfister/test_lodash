let _ = require('lodash');
// merge everything down into a new object
merge = _.merge({},methods,defaults,inputs),
assign = _.assign({},methods,defaults,inputs);
 
console.log(merge.delta.x + ',' + merge.delta.y); // 325,240
console.log(assign.delta.x + ',' + assign.delta.y); // 325,undefined
