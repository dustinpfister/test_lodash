let Unit = function (obj) {
    obj = obj || {};
    this.x = obj.x || 0;
    this.y = obj.y || 0;
};
Unit.prototype.size = 64;
// DEMO using the for in loop and Object.hasOwnProperty
let u = new Unit({ x : 12,y : 5});
let key, val;
for(key in u){
    // using Object.hasOwnProperty to find if a property is and
    // own property or not
    if(u.hasOwnProperty(key)){
        val = u[key];
        console.log(key + ' : '+val);
    }
}
// x: 12
// y: 5

