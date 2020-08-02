let _ = require('lodash');

let obj = {
    b: 2,
    z: 26,
    a: 1,
    j: 10
};

let obj_sort = _.orderBy(obj);
console.log(obj_sort);
// [1, 2, 10, 26]
