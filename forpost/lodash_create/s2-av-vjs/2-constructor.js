let MyClass = function(x, y){
    this.x = x;
    this.y = y;
};


MyClass.prototype.move = function (dx, dy) {
    this.x += dx;
    this.y += dy;
};

let obj = new MyClass(5, 15);
obj.move(2, 5);
console.log(obj); // { x: 7, y: 20 }
