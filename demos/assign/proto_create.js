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


var keepIt = _.create(Point.prototype, _.assign({}, new Point(0,0,5,2),{foo:'bar'}));

console.log(keepIt.constructor.name); // Point
keepIt.tick();

console.log(keepIt); // Point { x: 5, y: 2, dx: 5, dy: 2, foo: 'bar' }