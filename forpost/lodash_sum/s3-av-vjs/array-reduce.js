// reduce
let sumArray = (array) => {
    return array.reduce((acc, n) => {
        return acc + n;
    }, 0);
};
console.log(sumArray([1, 2, 3, 4])); // 10
