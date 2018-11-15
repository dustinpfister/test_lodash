let _ = require('lodash');

// array element length
let a = [68,90,87,83,98];

var getAVG = function (a) {
    i = a.length,
    sum = 0;
    while (i--) {
        sum += a[i];
    }
    return sum / a.length;
};

console.log(getAVG(a)); // 85.2
