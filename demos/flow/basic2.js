let _ = require('lodash');


let dist = _.flow([
    function (x1, y1, x2, y2) {
        return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    },
    Math.sqrt,
    Math.round
]);

console.log(dist(10, 15, 90, 22)); // 80
