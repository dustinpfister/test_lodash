let _ = require('lodash');

let comp = _.template('(<%= x %>,<%= y %>)'),

str = comp({x:47,y:15});

console.log(str); // '(47,15)'