let _ = require('lodash');

let methods = {
    move: function (x, y) {
        this.x += x;
        this.y += y;
    }
};

let obj = Object.create(methods, {
    x: {value:5, enumerable: true, writable: true}, 
    y: {value:15, enumerable: true, writable: true}}
);

obj.move(2, 5);
console.log(obj); // { x: 7, y: 20 }
