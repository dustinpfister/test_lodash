let _ = require('lodash');

let data1 = ['foo', 'bar', 'baz'],
data2 = ['foo', 'man', 'chew'];

console.log( _.difference(data1, data2) ); // [ 'bar', 'baz' ]
console.log( _.difference(data2, data1) ); // ['man', 'chew']