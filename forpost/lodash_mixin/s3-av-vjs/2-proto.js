// mix in method
var mixin = function (obj, source) {
    Object.keys(source).forEach(function (key) {
        var value = source[key];
        // if source value is a function
        if (typeof value === 'function') {
            // if target object is a function, assign to prototype object
            if (typeof obj === 'function') {
                obj.prototype[key] = value;
            } else {
                // else make it an own property
                obj[key] = value;
            }
        }
    });
};
// DEMO
// constructor
var Point = function (x, y) {
    this.x = x;
    this.y = y;
};
// prototype
Point.prototype.atan = function () {
    return Math.atan2(this.y, this.x) / Math.PI * 180;
};
// source object as a collection of utils
var utils = {};
utils.dist = function (x, y) {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
};
// calling mixin and adding utils to the Point class
mixin(Point, utils);
// creating a Point instance and using the methods
var pt = new Point(0, 5);
console.log(pt.atan().toFixed(2)); // 90.00
console.log(pt.dist(10, 5).toFixed(2)); // 10.00

