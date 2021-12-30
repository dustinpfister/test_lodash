var Unit = function (obj) {
 
    obj = obj || {};
    this.x = obj.x || 0;
    this.y = obj.y || 0;
 
};
 
// size value in the prototype
Unit.prototype.size = 64;
 
// new Unit
var u = new Unit({
        x : 12,
        y : 5
    });

var key,val;
for(key in u){
 
    // using Object.hasOwnProperty to find if a property is directly on an object
    if(u.hasOwnProperty(key)){
 
        val = u[key];
        console.log(key + ' : '+val);
 
    }
 
}
