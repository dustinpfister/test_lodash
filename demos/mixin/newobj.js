let _ = require('lodash');

// just some properties
let props = {
    x: 100,
    y: 100
},

// some methods that will work with such properties
methods = {
    atan: function (string) {
        return Math.atan2(this.y, this.x) / Math.PI * 180;
    },
    dist: function (x, y) {
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    },
    setByAD: function (a, d, cx, cy) {
        cx = cx === undefined ? 0 : cx;
        cy = cy === undefined ? 0 : cy;
        a = Math.PI / 180 * a;
        this.x = Math.cos(a) * d + cx;
        this.y = Math.sin(a) * d + cy;
        return this;
    }
};

let obj = _.mixin(props, methods);

// atan, and distance relative to 0,0
console.log(obj.atan()); // 45
console.log(obj.dist(0, 0)); // 141.42...

// set by angle and distance
obj.setByAD(45, 100);
console.log(_.round(obj.dist(0, 0))); // 100
