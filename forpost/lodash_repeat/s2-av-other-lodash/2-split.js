let _ = require('lodash');

let str = _.repeat('1,', 5);
let arr = _.split(str, ',');
arr.pop();
console.log(arr); // [ '1', '1', '1', '1', '1' ]
