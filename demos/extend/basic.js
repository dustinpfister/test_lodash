let _ = require('lodash');

/*
var a = Object.create(Object.prototype, {
  
  b: {
    value: 42
  }
  
});
*/

var a = _.create({a:42},{b:42})


var e = {

    f: 12

};

//console.log( _.extend(e,a) );
