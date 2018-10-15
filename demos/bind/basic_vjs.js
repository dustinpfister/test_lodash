let obj = {
    x: 0,
    y: 0,
    dx: 5,
    dy: 7
};

var step = function () {
    this.x += this.dx;
    this.y += this.dy;
};

// create an obj.step with Function.prototype.bind
obj.step = step.bind(obj);

// I can now call step, and this will refer to obj
obj.step();

console.log(obj.x, obj.y); // 5,7
