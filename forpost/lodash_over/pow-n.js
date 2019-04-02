let _ = require('lodash');

let powN = function (n) {
    return function () {
        let nums = [],
        len = arguments.length,
        i = 0;
        while (i < len) {
            nums.push(Math.pow(n, arguments[i]))
            i += 1;
        }
        return nums;
    };
};

let pow2n4 = _.over([powN(2),powN(3)]);

console.log(pow2n4(2, 4));
