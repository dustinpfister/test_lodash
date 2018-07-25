let _ = require('lodash');

let props = {
    x: 100,
    y: 100
},

methods = {
    atan: function (string) {
        return Math.atan2(this.y, this.x) / Math.PI * 180;
    }
}

let obj = _.mixin(props, methods);

console.log(obj.atan()); // 45
