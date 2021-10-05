let _ = require('lodash');

console.log(_.countBy(['foo', 'man', 'chew','happy','bar'], 'length'));
 // {3: 3, 4: 1, 5: 1}
 
 console.log(_.countBy(['foo', 'man', 'chew','happy','bar'], function(str){
    return str.length;
}));
 // {3: 3, 4: 1, 5: 1}