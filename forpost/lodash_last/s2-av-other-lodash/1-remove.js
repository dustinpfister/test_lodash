_ = require('lodash');

let arr = [1, 2, 3, 4],
last = _.remove(arr, (el,i)=>{
    return i === arr.length -1
})
// lodash remove could be used as well
// for getting the last element. However it will
// also mutate the array, and is a complex 
// solution for a fairly simple task
console.log(last[0]); // 4
console.log(arr); // [1,2,3,4]
