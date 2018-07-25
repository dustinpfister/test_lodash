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

    }
}

let obj = _.mixin(props, methods);

console.log(obj.atan()); // 45
console.log(obj.dist(0,0)); // 141.42...
