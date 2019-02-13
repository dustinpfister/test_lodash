let _ = require('lodash');

let obj = {n:42,a:{b:12}};

let obj2 = _.assign({},obj);

obj.a.b = 13;
console.log(obj2.a.b);