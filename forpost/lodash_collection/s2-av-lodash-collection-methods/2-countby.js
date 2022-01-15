let _ = require('lodash');
 
let a = [
    { type: 'goblin' },
    { type: 'goblin' },
    { type: 'slime' },
    { type: 'goblin' },
    { type: 'bat' },
];
let b = _.countBy(a, 'type');
console.log(b);
//{ goblin: 3, slime: 1, bat: 1 }