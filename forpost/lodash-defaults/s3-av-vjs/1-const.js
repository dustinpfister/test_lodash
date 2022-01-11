let Box = function (opt) {

    opt = opt || {};

    this.width = opt.width === undefined ? 32 : opt.width;
    this.height = opt.height === undefined ? 32 : opt.height;
    this.x = opt.x === undefined ? 0 : opt.x;
    this.y = opt.y === undefined ? 0 : opt.y;

};

// works as expected
let bx = new Box();
console.log(bx.width); // 32;

let bx2 = new Box({width:64,x:37});
console.log(bx2.width); // 64
console.log(bx2.x); // 37
console.log(bx2.y); // 0
