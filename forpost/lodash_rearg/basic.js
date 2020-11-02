let _ = require('lodash');

let func = (a, b, c) => {
    return [a, b, c];
};

let re = _.rearg(func, [2, 0, 1]);

console.log(re(1, 2, 3));
