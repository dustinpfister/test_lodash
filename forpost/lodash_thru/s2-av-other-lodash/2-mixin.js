let _ = require('lodash');

_.mixin({
    myMethod: function (str) {
        return _.chain('01234')
        .split('')
        .map((n) => {
            return Math.pow(2, n);
        })
        .value();
    }
})
// I can not call this custom method
let a = _.myMethod('012345');
console.log(a); // [ 1, 2, 4, 8, 16 ]
// it can also be used in chains
let b = _.chain([0, 1, 2, 3, 4, 5])
.join('')
.myMethod()
.value();
console.log(b);
// [ 1, 2, 4, 8, 16 ]
