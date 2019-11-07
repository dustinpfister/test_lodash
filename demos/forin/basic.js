let _ = require('lodash');

// Simple Constructor and Prototype
let A = function () {
    this.b = 42
};
A.prototype.c = 7;

// _.forIn will loop over the Own
// properties as well as the prototype
_.forIn(new A(), function (d) {
    console.log(d); // 42 7
});

// Other options such as _.forOwn
// and _.forEach will just loop
// over Own properties
_.forOwn(new A(), function (d) {
    console.log(d); // 42
});
_.forEach(new A(), function (d) {
    console.log(d); // 42
});
