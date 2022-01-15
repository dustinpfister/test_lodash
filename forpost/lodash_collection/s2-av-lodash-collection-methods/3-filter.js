let _ = require('lodash');
 
let a = [
    { type: 'goblin', hp: 2 },
    { type: 'goblin', hp: 0 },
    { type: 'slime', hp: 0 },
    { type: 'goblin', hp: 10 },
    { type: 'bat', hp: 3 },
];
let b = _.filter(a, (unit)=>{
    return unit.type === 'goblin';
});
let c = _.filter(a, (unit)=>{
    return unit.hp <= 0;
});
console.log(b);
//[
//    { type: 'goblin', hp: 2},
//    { type: 'goblin', hp: 0},
//    { type: 'goblin', hp: 10}
//]
console.log(c);
// [ { type: 'goblin', hp: 0 }, { type: 'slime', hp: 0 } ]

