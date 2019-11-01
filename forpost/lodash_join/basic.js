let _ = require('lodash');

var str = _.join(['home','dustin','github','test_lodash'], '/');
console.log('str:', str);
console.log('join:', str); 
console.log('split back:', _.split(str,'/'));

// 'str:' 'home/dustin/github/test_lodash'
// 'join:' 'home/dustin/github/test_lodash'
// 'split back:' [ 'home', 'dustin', 'github', 'test_lodash' ]