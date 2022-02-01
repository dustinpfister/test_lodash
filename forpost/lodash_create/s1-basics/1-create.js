let _ = require('lodash');

let methods = {
    move: function (x, y) {
        this.x += x;
        this.y += y;
    }
};

let obj = _.create(methods, {x: 5, y: 15} );
obj.move(2, 5);
console.log(obj); // { x: 7, y: 20 }
