let _ = require('lodash');

var foo = function (a, b) {

    return a + b;

};

var bar = function (b) {

    return foo(40, b);

};

console.log(bar(2)); // 42
