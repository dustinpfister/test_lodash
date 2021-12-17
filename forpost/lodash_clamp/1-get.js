var get = function (arr, index, def) {
    def = def === undefined ? 0 : def;
    var a = arr[index];
    return a === undefined ? def : a;
};
// using this get method
var arr = [1, 2, 3];
console.log( get(arr, -1, 0) ); // 0
console.log( get(arr, 2, 0) );  // 3
console.log( get(arr, 3, 0) );  // 0