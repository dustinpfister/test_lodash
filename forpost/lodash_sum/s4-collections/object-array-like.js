// and array like Object
let obj = {
    0: 42,
    1: 10,
    2: 5,
    length: 3
};
// using array reduce with Function.call
let sum = Array.prototype.reduce.call(obj, (acc, n) => {
        return acc + n;
    }, 0);
console.log(sum); // 57
