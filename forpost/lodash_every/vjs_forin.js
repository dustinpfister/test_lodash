
// An every method could be written like this
// with Object.values
var every = function (obj, forEach) {
    for (var prop in obj) {
        if (!forEach(obj[prop])) {
            return false;
        }
    }
    return true;
};
// lets put it to the test
var arr1 = [1, 2, 3, 4],
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
// works as exspected
console.log(every(arr1, tester)); // true
console.log(every(arr2, tester)); // false
console.log(every(obj1, tester)); // true
console.log(every(obj2, tester)); // false
