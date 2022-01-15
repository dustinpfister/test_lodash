let _ = require('lodash');
 
let a = [
    { id: 3, type: 'goblin', hp: 2 },
    { id: 5, type: 'goblin', hp: 0 },
    { id: 1, type: 'slime', hp: 0 },
    { id: 4, type: 'goblin', hp: 10 },
    { id: 2, type: 'bat', hp: 3 },
];
let b = _.find(a, {id: 4});
console.log(b);
// { id: 4, type: 'goblin', hp: 10 }

