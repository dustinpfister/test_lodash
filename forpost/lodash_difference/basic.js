let _ = require('lodash');

let data = ['foo', 'bar', 'baz']

let noGood = _.difference(['foo', 'man', 'chew'], data);

console.log(noGood); // ['man', 'chew']