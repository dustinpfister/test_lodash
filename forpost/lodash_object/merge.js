let _ = require('lodash');

let b = {
    n: 42
},
c = {
    n: undefined,
    d: {
        e: 12
    }
}

let m = _.merge(b, c);
console.log(m);
// { n: 42, d: { e: 12 } }

//
let a = _.assign(b, c);
console.log(a);
// { n: undefined, d: { e: 12 } }
