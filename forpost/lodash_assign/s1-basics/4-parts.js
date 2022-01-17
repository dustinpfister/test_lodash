let _ = require('lodash');

var pos = {
    x: 42,
    y: 12
};

var deltas = {
    dx: 1.2,
    dy: 0.2
};

var methods = {
    step: function () {
        this.x += this.dx;
        this.y += this.dy;
    }
}

// assign everything to a new object
var obj = _.assign({}, pos, deltas, methods);

obj.step();

console.log(obj.x,obj.y); // 43.2,12.2
