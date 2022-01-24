// a simple array
var arr = [1,2,3,4,5];
 
// array.map will set each element to what is returned
// and I can use the value of each element in the process.
arr = arr.map(function(el){
 
    return el * 10;
 
});
 
console.log(arr);
// [10,20,30,40,50]