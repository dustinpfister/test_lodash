let arr = ['foo', 42, null, 'baz'];

let test = (el) => {
    return el === null;
};

console.log(arr.some(test)); // true
