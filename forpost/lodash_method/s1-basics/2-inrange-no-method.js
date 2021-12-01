let _ = require('lodash');

let inRange = function(){
    return this.x < 9 && this.x >=0 
}
let points = [
    { pt: { x: -1} },
    { pt: { x: 5} },
    { pt: { x: 3} },
    { pt: { x: 25} },
];
 
let f = _(points).filter((el) => {
    return inRange.call(el.pt);
}).map((el) => {
    return el.pt.x;
}).value();
console.log(f); // [5, 3]
