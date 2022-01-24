let _ = require('lodash');


var obj = {foo: 'bar', anwser: 42};
 
console.log(_.map(obj, function(item){
    return item;
}));
// ['bar', 42]