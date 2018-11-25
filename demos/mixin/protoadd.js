let _ = require('lodash');

let Ship = function (x, y) {
    this.x = x;
    this.y = y;
};

Ship.prototype.move = function (dx, dy) {
    this.x += dx;
    this.y += dy;
};

var methods = {
    distanceTo: function (point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2))
    }
};

_.mixin(Ship, methods);

var ship1 = new Ship(0, 0);

ship1.move(5, 10);

console.log(ship1.x, ship1.y);
