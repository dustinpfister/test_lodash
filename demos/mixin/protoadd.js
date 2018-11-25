let _ = require('lodash');

let Ship = function (x, y) {
    this.x = x;
    this.y = y;
};

Ship.prototype.move = function (a, d) {
    this.x += Math.cos(a) * d;
    this.y += Math.sin(a) * d;
};

var methods = {
	
	
}

_.mixin(obj);
