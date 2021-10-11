let _ = require('lodash');

let a = ['foo', 27, 'man', 42, 'chew'];
let b = _.remove(a, (el) => typeof el === 'number');
console.log(b); // [27, 42]
console.log(a); // ['foo','man',chew];