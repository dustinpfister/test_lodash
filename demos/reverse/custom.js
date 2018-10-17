
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
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr2); // [ 4, 3, 2, 1 ]

// array.from
console.log( Array.from(arr).reverse()); // [ 4, 3, 2, 1 ]
console.log(arr); // [ 1, 2, 3, 4 ]