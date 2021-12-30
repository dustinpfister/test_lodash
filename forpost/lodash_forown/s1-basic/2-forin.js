let _ = require('lodash');

let Unit = function (obj) {
    obj = obj || {};
    this.x = obj.x || 0;
    this.y = obj.y || 0;
};
Unit.prototype.size = 64;
// DEMO using lodash for own method
let u = new Unit({ x : 12,y : 5});
_.forIn(u, function (val, key, obj) {
    console.log(key + ' : '+val);
});
// x: 12
// y: 5
// size: 64
