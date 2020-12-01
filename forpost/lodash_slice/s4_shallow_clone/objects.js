let _ = require('lodash');

let a = [{n:1}, {n:2}, {n:3}, {n:4}];
let b = _.slice(a, 0, a.length);

b = _.map(b, (obj)=> { obj.n = Math.pow(2, obj.n); return obj; } );

console.log(b); // [ { n: 2 }, { n: 4 }, { n: 8 }, { n: 16 } ]
// a is effected
console.log(a); // [ { n: 2 }, { n: 4 }, { n: 8 }, { n: 16 } ]