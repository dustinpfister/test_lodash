let obj = {
    x: 0,
    y: 0,
    dx: 5,
    dy: 7
};
// creating a step function with a function
// expression, NOT an arrow function
const step = function () {
    this.x += this.dx;
    this.y += this.dy;
};
// create a stepObj with Function.prototype.bind
let stepObj = step.bind(obj);
// I can now call step, and this will refer to obj
stepObj();
console.log(obj.x, obj.y); // 5,7
