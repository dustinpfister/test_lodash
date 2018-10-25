let _ = require('lodash');

// a while loop for building an array
let arr = [],
i = 0;
while (i < 4) {
    arr.push(Math.pow(2, i));
    i += 1;
}
console.log(arr); //[1,2,4,8]
