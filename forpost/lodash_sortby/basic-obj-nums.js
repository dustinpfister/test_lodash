let _ = require('lodash');

let nums = [{n: 5}, {n:42}, {n:-5}, {n:7}, {n:6}, {n:3}, {n:52}, {n:27}, {n:158}, {n:-1}];
console.log(_.sortBy(nums, (obj)=>{
    return obj.n;
}));
