// making a vanilla js forOwn method
let forOwn = function(obj, func){
    let keys = Object.getOwnPropertyNames(obj);
    keys.forEach(function (key) {
        func.call(obj, obj[key], key, obj);
    });
};
 
let Unit = function (obj) {
    obj = obj || {};
    this.x = obj.x || 0;
    this.y = obj.y || 0;
};
Unit.prototype.size = 64;
// DEMO using VJS forOwn method
let u = new Unit({x: 12,y: 5});
forOwn(u, function(val, key){  console.log(key + ' : ' + val); })
// x: 12
// y: 5
