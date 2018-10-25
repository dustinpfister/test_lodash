let _ = require('lodash');

let arr = _.times(4, (i) => Math.pow(2, i));

console.log(arr); //[1,2,4,8]

let rnd = _.times(4, (i) => {
        return 10 + i * 10;
});

console.log(rnd); // [ 10, 20, 30, 40 ]
