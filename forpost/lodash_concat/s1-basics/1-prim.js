const _ = require('lodash')

let start = [1, 2, 3],
mid = [4, 5, 6],
end = [7, 8, 9];
 
let full = _.concat(start, mid, end);
 
console.log(full); // [1,2,3,4,5,6,7,8,9]