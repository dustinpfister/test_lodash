let _ = require('lodash');

var distance = function (x1, y1, x2, y2) {

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

};

var forA = function (x1, x2) {

    return Math.pow(x1 - x2, 2);

};

var dist = _.flow(
        [
            function (a, b) {

                console.log(a,b);

            }
        ]);

dist(10, 10)

//var dist = _.flow()
