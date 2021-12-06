
var utils = {};
utils.atan = function (string) {
    return Math.atan2(this.y, this.x) / Math.PI * 180;
};
utils.dist = function (x, y) {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
};

let obj = {
    x: 0,
    y: 0
};

Object.keys(utils).forEach(function (key) {
    var value = utils[key];
    if (typeof value === 'function') {
        obj[key] = value;
    }
});

console.log( obj.dist(10, 5).toFixed(2) ); // 11/18
