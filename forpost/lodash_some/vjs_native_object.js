
let test = (el) => {
    return el === null;
};

let some = (obj) => {
    return Object.values(obj).some(test)
};

let arr = [1, null, 2],
arr2 = [3, 4, 5],
obj = {
    a: 'foo',
    b: 'bar',
    c: null,
    d: 42
},
obj2 = {
    a: 3,
    b: 3
}

// works with objects
console.log(some(obj)); // true
console.log(some(obj2)); // false

// and arrays to just like with lodash
console.log(some(arr)); // true
console.log(some(arr2)); // false
