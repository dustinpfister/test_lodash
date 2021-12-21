let _ = require('lodash');

// some objects
let objs = [{x:1,y:5}, {x:7,y:10}];
 
// concatenating with another object
let points = _.concat(objs, {x:0,y:0});
 
// works as expected
console.log(points); // [ { x: 1, y: 5 }, { x: 7, y: 10 }, { x: 0, y: 1 } ]
 
// but what if the primitives in the referenced
// objects change?
_.each(objs, function(pt){
 
    pt.x = 0;
    pt.y = 0;
 
});
 
// this is what
console.log(points); // [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ]