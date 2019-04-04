let _ = require('lodash');

let a = (x, y) => {
    return x + y;
},
b = (x, y) => {
    return x * y;
}

let c = _.over([a, b])

console.log( c(10,2) ); // [12,20]