
let _ = require('lodash');

// vjs rearg
let rearg = (func, indices) => {
    return function () {
        let i = 0,
        len = func.length,
        args = [];
        while (i < len) {
            args[i] = arguments[indices[i]];
            i += 1;
        }
        return func.apply(this, args);
    };
};

let func = (a, b, c) => {
    return [a, b, c];
};

let a = _.rearg(func, [2, 0, 1]),
b = rearg(func, [2, 0, 1]);

console.log(a(1, 2, 3)); // [3,1,2]
console.log(b(1, 2, 3)); // [3,1,2]
