let arr = [1, 2, 3, 4],
last = arr.slice(arr.length-1,arr.length);
// array.slice will work like lodash last
console.log(last); // 4
console.log(arr); // [1,2,3,4]
