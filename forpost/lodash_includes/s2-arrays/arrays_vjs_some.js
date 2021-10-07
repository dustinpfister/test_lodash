let tester = (val) => {
    return function (el) {
        return el === val;
    };
};

let arr = ['a', 'b', 'c'];

console.log(arr.some( tester(42) )); // false
console.log(arr.some( tester('d') )); // false
console.log(arr.some( tester('c') )); // true
