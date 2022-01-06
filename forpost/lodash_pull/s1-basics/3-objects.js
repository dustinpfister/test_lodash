let _ = require('lodash');

let source = [{i:0}, {i:1}, {i:2}];
 
// this will not work as the new value given is a whole
// new object in memory
let a = _.pull(source, {i:1});
console.log(a);
// [ { i: 0 }, { i: 1 }, { i: 2 } ]
 
// this will work because it is a reference to the same object
let b = _.pull(source, source[1]);
console.log(b);
// [ { i: 0 }, { i: 2 } ]
