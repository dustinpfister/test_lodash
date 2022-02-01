let _ = require('lodash');

let methods = {
    move: function (x, y) {
        this.x += x;
        this.y += y;
    }
};

let obj = Object.create(methods, {x: {value:5,writable: true}, y: {value:15,writable: true}});

obj.move(5, 5);

console.log(obj.x, obj.y); // 10 20
