let _ = require('lodash');

let nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1];
let lessThanTen = nums.sort(nums, function (a, b) {
	
	if(a < 10 && !(b < 10) ){
		return 1;
	}
	return 0;
});
console.log(lessThanTen);
// [ 42, 52, 27, 158, 5, -5, 7, 6, 3, -1 ]


