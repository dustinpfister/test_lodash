let _ = require('lodash');

// my own custom times
var times = function (count, func) {
    var i = 0,
    per,
    results = [];
    count = count || 0;
    func = func || function () {};

    // while i is less than len
    while (i < count) {
        per = i / count;
        results.push(func.call({
                i: i,
                count: count,
                per: per,
                bias: 1 - Math.abs(.5 - per) / .5,
                results: results
            }, i, count, per));
        i += 1;
    }
    return results;
};

var points = times(10, function () {

        var s = this;

        return {
            i: s.i,
            x: 320 / s.count * s.i,
            y: Math.floor(120 * s.per + 120 * s.bias)
        }

    });

console.log(points);
/*
[ { i: 0, x: 0, y: 0 },
  { i: 1, x: 32, y: 35 },
  { i: 2, x: 64, y: 72 },
  { i: 3, x: 96, y: 108 },
  { i: 4, x: 128, y: 144 },
  { i: 5, x: 160, y: 180 },
  { i: 6, x: 192, y: 168 },
  { i: 7, x: 224, y: 156 },
  { i: 8, x: 256, y: 144 },
  { i: 9, x: 288, y: 132 } ]
  */
