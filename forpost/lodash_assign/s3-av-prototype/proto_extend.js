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


// EXTEND
var extended = _.extend({},new Point(5,7,25,50));

// the prototype will be lost
console.log(extended.constructor.name); // Object

// but it will be combined the inherited properties into the object.
extended.tick();
console.log(extended); // { x: 30, y: 57, dx: 25, dy: 50, tick: [Function] }