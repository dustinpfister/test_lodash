let _ = require('lodash');

let inRange = function(){
    return this.x < 9 && this.x >=0 
}

var points = [
    { pt: { x: -1, tester: inRange } },
    { pt: { x: 5, tester: inRange} },
    { pt: { x: 3, tester: inRange} },
    { pt: { x: 25, tester: inRange} },
];
 
let f = _.filter(points, _.method('pt.tester'));
let r = _.map(f, function(el){ return el.pt.x})
console.log(r); // [5, 3]
