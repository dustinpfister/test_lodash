let arr = [1,2,3,4,5,6],
// my Array.shift example could also be done like this with Array.splice
first = arr.splice(0,1)[0];
console.log(first); // 1
console.log(arr); //[2,3,4,5,6]