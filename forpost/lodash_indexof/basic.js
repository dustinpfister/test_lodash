let _ = require('lodash');

let arr = ['zero', 'one', 'two', 'three'],
index = _.indexOf(arr, 'two');
console.log(index, arr[index]); // 2 'two'
