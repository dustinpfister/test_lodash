let _ = require('lodash'),
objs = [{x:1,y:5}, {x:7,y:10}];

// from an empty array
let points = [].concat(objs, {x:0,y:0});

console.log(points); // [ { x: 1, y: 5 }, { x: 7, y: 10 }, { x: 0, y: 1 } ]

_.each(objs, function(pt){

    pt.x = 0;
    pt.y = 0;

});

console.log(points); // [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ]
