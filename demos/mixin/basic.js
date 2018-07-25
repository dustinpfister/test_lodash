let _ = require('lodash');


_.mixin({'foo': function (string) {return 'bar';}});

console.log( _.foo() ); // 'bar'
