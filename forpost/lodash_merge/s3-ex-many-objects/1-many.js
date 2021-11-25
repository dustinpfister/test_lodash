let _ = require('lodash');
// some default values
var defaults = {
    x : 320,
    y : 240,
    delta : {
       x : 0,
       y : 0
    }
},
// some input values
inputs = {
   delta : {
      x: 5
   }
},
// some methods that act on values
methods = {
    move : function(){
        this.x += this.delta.x;
        this.y += this.delta.y;
    }
};
// merge everything down into a new object
var obj = _.merge({},methods,defaults,inputs);
obj.move();
console.log(obj.x); // 325