
// An every method could be written like this
// with Object.values
let every = (obj, forEach) => {
    let i = 0,
    values = Object.values(obj),
    len = values.length;
    while (i < len) {
        if (!forEach(values[i])) {
            return false;
        }
        i += 1;
    }
    return true;
};
// lets put it to the test
let arr1 = [1, 2, 3, 4],
arr2 = [1, 2, 'c', 4],
obj1 = {
    foo: 5,
    bar: 7
},
obj2 = {
    foo: 'string',
    bar: null
},
tester = (el) => {
    return typeof el === 'number';
};

console.log( every(arr1, tester) ); // true
console.log( every(arr2, tester) ); // false
console.log( every(obj1, tester) ); // true
console.log( every(obj2, tester) ); // false