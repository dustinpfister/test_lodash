
let arr1 = [1, 2, 3, 4],
arr2 = [1, 2, 'c', 4],
tester = (el) => {
    return typeof el === 'number';
};
// using the tester method with every
console.log(arr1.every(tester)); // true
console.log(arr2.every(tester)); // false
