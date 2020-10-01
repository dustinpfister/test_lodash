let _ = require('lodash');

let high = (a, b) => {
    a = a || _.constant(0);
    b = b || _.constant(0);
    return a() + b();
};

let n = high(),
n2 = high(_.constant(5), function () {
        return 5;
    });

console.log(n, n2); // 0 10