let _ = require('lodash');

let foo = function (a, b) {

    return a + b;

};

let bar = _.partial(foo, 40);

console.log( bar(2) ); // 42
