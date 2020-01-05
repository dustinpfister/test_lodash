let _ = require('lodash');

let arr1 = [{id: 7}, {id: 10}],
arr2 = [{id:7}],

result = _.intersectionBy(arr1, arr2, 'id');

console.log(result); // [ { id: 7 } ]
