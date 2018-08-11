let _ = require('lodash');

var b = new Array(8).fill(0).join(''); // [ '0', '0', '0', '0', '0', '0', '0', '0' ]

// to string with \_.join

console.log(b); // '00000000'

// back again with _.split
console.log(b.split('')); // [ '0', '0', '0', '0', '0', '0', '0', '0' ]


