_ = require('lodash');
// adding a _.wrapNumber method to lodash
_.mixin({'wrapNumber': function(n, b){
    n = n === undefined ? 0 : n;
    b = b === undefined ? 1 : b;
    return (n % b + b) % b;
}});
// can use the wrap number method directly
console.log(_.wrapNumber(-1, 10)); // 9
console.log(_.wrapNumber(10, 10)); // 0
