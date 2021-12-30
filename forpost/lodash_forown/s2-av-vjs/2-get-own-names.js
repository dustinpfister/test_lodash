let Unit = function (obj) {
    obj = obj || {};
    this.x = obj.x || 0;
    this.y = obj.y || 0;
};
Unit.prototype.size = 64;
// DEMO using Object.getOwnPropertyNames and array.foreach
let u = new Unit({x: 12,y: 5});
Object.getOwnPropertyNames(u).forEach(function (key) {
    let val = u[key];
    console.log(key + ' : ' + val);
});
// x: 12
// y: 5
