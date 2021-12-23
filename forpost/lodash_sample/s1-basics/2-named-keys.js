_ = require('lodash');
let obj = {
    foo: 40,
    bar: 2,
    baz: 7
};
let n = _.sample(obj);
console.log(n)