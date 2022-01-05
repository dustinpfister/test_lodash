let _ = require('lodash');

let points = {
    guy1: {
        x: 42,
        y: 17
    },
    guy2: {
        x: -17,
        y: 0
    }
};

let translate = function (point, dx, dy) {

    point.x += dx;
    point.y += dy;

};

let drop = _.partial(translate, _, 0, 100);

_.forEach(points, function (guy) {
    drop(guy);
});

console.log(points);
// { guy1: { x: 42, y: 117 }, guy2: { x: -17, y: 100 } }
