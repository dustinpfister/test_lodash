let arr = [1, 2, 3, 4],
last = arr.splice(arr.length-1,1);
// array.splice will have the same effect as
// arrar.pop
console.log(last[0]); // 4
console.log(arr); // [1,2,3]
