let _ = require('lodash');

let A = function () {

    this.b = 42

};

A.prototype.c = 7;


_.forIn(new A(), function (d) {

    console.log(d); // 42 7

});


_.forOwn(new A(), function (d) {

    console.log(d); // 42

});

_.forEach(new A(), function (d) {

    console.log(d); // 42

});
