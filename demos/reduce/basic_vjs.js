let _ = require('lodash');

let sum = [1, 1, 1, 1].reduce((sum, cur)=> {

    return sum + cur;

});

console.log(sum); // 4

