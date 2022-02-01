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

console.log( Object.getPrototypeOf(obj) ); // { move: [Function: move] }
