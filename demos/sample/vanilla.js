let _ = require('lodash'),

nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1];

// yes it is not to hard to do it with vanilla js
let si = Math.floor(nums.length * Math.random()),
samp = nums.slice(si,si+1)[0];

console.log(samp); // (random element from nums)



