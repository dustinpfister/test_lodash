const step = function (dx, dy) {
    this.x += dx;
    this.y += dy;
};
 
let obj = {
    x: 0,
    y: 0
};
step.apply(obj, [7, 10])
console.log(obj); // { x: 7, y: 10 }