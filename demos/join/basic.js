let _ = require('lodash');

var str = _.join(['home','dustin','github','test_lodash'], '/');

console.log(str); //'home/dustin/github/test_lodash'

console.log(_.split(str,'/')); // [ 'home', 'dustin', 'github', 'test_lodash' ]
