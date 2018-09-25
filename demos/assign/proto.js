let _ = require('lodash');

// Simple Point Class
var Point = function (x, y, dx, dy) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

};

// With a prototype
Point.prototype.tick = function () {

    this.x += this.dx;
    this.y += this.dy;

};

// so if I have an instance of Point
var pt = new Point(50, 100, 0, 25);

// then it's constructor is Point
console.log(pt.constructor.name); // 'Point'

// and the tick method works as expected
pt.tick();
console.log(pt.x, pt.y); // 50 125

// but if I assign it to a plain old object
var assigned = _.assign({},pt);

// then the prototype is lost
console.log(assigned.constructor.name); // Object

// so then I would be calling undefined if I
// called assign.tick
//assigned.tick(); // TypeError: assigned.tick is not a function


// EXTEND
var extended = _.extend({},new Point(5,7,25,50));

console.log(extended.constructor.name); // Object
extended.tick();
console.log(extended); // { x: 30, y: 57, dx: 25, dy: 50, tick: [Function] }