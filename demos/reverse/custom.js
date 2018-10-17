
// custom method
let reverse = function (arr) {
    let newArr = [],
    i = arr.length;
    while (i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};

console.log(reverse([1,2,3,4])); // [4,3,2,1]

// object.assign
let arr = [1,2,3,4],
arr2 = Array.from(Array.prototype.reverse.call(Object.assign({length:Object.keys(arr).length},arr)));
console.log(arr);
console.log(arr2);