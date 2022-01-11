let _ = require('lodash');

let Box = function (opt) {

    opt = opt || {};

    // handle defaults
    _.defaults(opt, {
        width: 32,
        height: 32,
        x: 0,
        y: 0
    });

    // merge in opt
    _.merge(this, opt);

};

// works as expected
let bx = new Box();
console.log(bx.width); // 32;

let bx2 = new Box({width:64,x:37});
console.log(bx2.width); // 64
console.log(bx2.x); // 37
console.log(bx2.y); // 0
