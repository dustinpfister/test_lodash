let _ = require('lodash');

let a = {x: 5};
_.defaults(a, {
    x: 0,
    y: 0
});
console.log(a); // { x: 5, y: 0 }
