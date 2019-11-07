let _ = require('lodash');

let arr = [{x:42,y:12}, {x:23,y:32},{x:100,y:6}];

let sortX = _.sortBy(arr, 'x'),
sortY = _.sortBy(arr, 'y');

console.log(sortX.pop().x); // 100
console.log(sortY.pop().y); // 32

