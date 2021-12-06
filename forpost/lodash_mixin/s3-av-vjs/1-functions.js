// mix in method
var mixin = function (obj, source) {
    Object.keys(source).forEach(function (key) {
        var value = source[key];
        // if source value is a function
        if (typeof value === 'function') {
            // assign to source object
            obj[key] = value;
        }
    });
};
// DEMO
// source object as a collection of utils
var utils = {};
utils.atan = function (string) {
    return Math.atan2(this.y, this.x) / Math.PI * 180;
};
utils.dist = function (x, y) {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
};
// point object
let pt = {
    x: 0,
    y: 0
};
mixin(pt, utils);
console.log(pt.dist(10, 5).toFixed(2)); // 11/18
