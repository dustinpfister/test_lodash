let arr = [1,2,3,4,5,6],
// Array.slice does the same thing only it returns
// a new array so it does not mangle the original
first = arr.slice(0,1)[0];
console.log(first); // 1
console.log(arr); //[1,2,3,4,5,6]