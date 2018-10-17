let _ = require('lodash');

let arr = ['foo', 'bar', 'man', 42];

// ['foo', 'bar', 'man', 42]
let arr2 = _.sortBy(arr , function(el,i){
	
	console.log(el);
	console.log(i);
	
});

console.log(arr2);
