let _ = require('lodash');

let b = {
    n: 42,
},
c = {
    d: {
        e: 12
    }
}

let a = _.assign(b,c),
m = _.merge(b, c);

console.log(a);
console.log(m);
// { n: 42, d: { e: 12 } }
// { n: 42, d: { e: 12 } }

// change to nested object in object c
c.d.e = 0;
console.log(a);
console.log(m);
// { n: 42, d: { e: 0 } }
// { n: 42, d: { e: 0 } }
