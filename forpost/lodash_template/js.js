let _ = require('lodash');

comp = _.template('all passed: <%- _.every(tests) %>'),

tests1 = comp({tests:[true,true,true]}),
tests2 = comp({tests:[true,false,true]});

console.log(tests1); // 'all passed: true'
console.log(tests2); // 'all passed: false'