// so looping from zero upwards presents a problem
// because the length of the array changes
var arr = [-1, -2, 3, -4, 5],
i = 0, len = arr.length;
while (i < len) {
    var el = arr[i];
    if (el < 0) {
        arr.splice(i, 1);
    }
    i += 1;
}
 
console.log(arr); // [ -2, 3, 5 ]
 
A simple solution for this would be to just loop backwards.
 
// looping backwards works
var arr = [-1, -2, 3, -4, 5],
i = arr.length;
while (i--) {
    var el = arr[i];
    if (el < 0) {
        arr.splice(i, 1);
    }
}
console.log(arr); // [3,5]