let a = [1, 2, 'b', 3];

let test = (el) => typeof el === 'string';

let reject = (arr, test) => {
    return arr.filter((el) => !test(el));
};

console.log(reject(a, test)); // [1,2,3]
console.log(a.filter(test)); // ['b']
