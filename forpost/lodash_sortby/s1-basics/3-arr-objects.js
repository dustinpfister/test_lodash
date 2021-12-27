let _ = require('lodash');

let arr = [{x:20,y:20}, {x:23,y:32},{x:100,y:6}];

// strings can be used to set a property to a number value
let sortX = _.sortBy(arr, 'x'),
sortY = _.sortBy(arr, 'y'),

// or a function can be given to define some logic
distance = _.sortBy(arr, (pt)=>{
    return Math.sqrt( Math.pow(pt.x - 70, 2) + Math.pow(pt.y -70, 2) );
});

console.log(sortX.pop().x); // 100
console.log(sortY.pop().y); // 32
console.log(distance.pop().x); // 20
