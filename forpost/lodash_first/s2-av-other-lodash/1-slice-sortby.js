let _ = require('lodash');
let arr = ['c', 'f','e', 'a', 'd', 'b'];
firstFew = _.slice(_.sortBy(arr),0,3);
console.log(firstFew); // ['a','b','c']
