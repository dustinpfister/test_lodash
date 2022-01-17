let _ = require('lodash');

// nested objects
var obj = {
    pos: {
        x: 2,
        y: 7,
        delta: {
            x: 0,
            y: 2.5
        }
    }
};

// methods
var methods = {
    step: function () {
        this.pos.x += this.pos.delta.x;
        this.pos.y += this.pos.delta.y;
    }
};

// assign everything to a new object
var assign = _.assign({}, obj, methods);

// merge everything to a new object
var merge = _.merge({}, obj, methods);

obj.pos.x = 0;
obj.pos.y = 0;

console.log(merge.pos.x, merge.pos.y); // 2,7
console.log(assign.pos.x, assign.pos.y); // 0,0
