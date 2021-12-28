let _ = require('lodash');

// lodash sort by will work with objects
// in general as it is a collection object
let obj = {
    foo: 42,
    bar: 0,
    baz: -7,
    zoo: 5
};
let a = _.sortBy(obj);
console.log(a);
// [ -7, 0, 5, 42 ]