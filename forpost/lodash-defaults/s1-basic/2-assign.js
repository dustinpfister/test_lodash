let _ = require('lodash');

let a = { x: 5 };
// the assign method will also work well for this
// and it will not mutate in place
let b = _.assign({}, {
    x: 0,
    y: 0
}, a);
console.log(a); // { x: 5 }
console.log(b); // { x: 5, y: 0 }