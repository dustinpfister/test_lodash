let _ = require('lodash');

let obj = {
    alpha: 'beta',
    time: 'zulu',
    foo: 'bar',
    name: 'alex'

};

console.log(_.sortBy(obj));
// [ 'alex', 'bar', 'beta', 'zulu' ]


let sortKeys = _.sortBy(Object.keys(obj));

console.log(sortKeys);
// [ 'alpha', 'foo', 'name', 'time' ]

