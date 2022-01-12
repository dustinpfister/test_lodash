let _ = require('lodash');

// works with map
let arr = [ [0.5], [-3.1, 0.25, 2.34, 0.75] ];
let r = _.invokeMap(arr, 'map', Math.round);

console.log(r);
