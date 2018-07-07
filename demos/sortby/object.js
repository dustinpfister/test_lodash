let _ = require('lodash');

let obj = {
    alpha: 'beta',
    time: 'zulu',
    foo: 'bar',
    name: 'alex'

};

console.log(_.sortBy(obj));
// [ 'alex', 'bar', 'beta', 'zulu' ]

