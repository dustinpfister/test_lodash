let _ = require('lodash');

// array element length
let a = [1, '2', 3, '4'];
let sum = _(a).map((el)=>{return parseFloat(el)}).sum(a);
console.log(sum); // 10
