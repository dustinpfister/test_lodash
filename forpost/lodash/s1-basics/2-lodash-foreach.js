let _ = require('lodash');
// same collections as before
let a = [1, 2, 3],
b = {0: 1,1: 2,2: 3,length: 3},
c = {'zero': 1,'one': 2,'two': 3};
// they all work out of the box with lodash forEach
let method = (n) => {
    console.log(n);
};
_.forEach(a, method);
_.forEach(b, method);
_.forEach(c, method);
