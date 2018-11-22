let _ = require('lodash');

let distance = function (x1, y1, x2, y2) {
    return Math.round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
};

console.log(distance(10, 15, 90, 22)); // 80


let forA = function (a1, a2) {
    return Math.pow(a1 - a2, 2);
};
let dist = _.flow([
   function (x1, y1, x2, y2) {
       return forA(x1, x2) + forA(y1, y2)
   },
   Math.sqrt,
   Math.round
]);

console.log(dist(10, 15, 90, 22)); // 80
