let _ = require('lodash');

let arr = [null,1,'foo',NaN,false,'bar',undefined,undefined,42];
console.log(_.compact(arr)); // [ 1, 'foo', 'bar', 42 ]