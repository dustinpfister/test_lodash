// crude yet effective find method
let find = function (col, forEach) {
    let prop;
    for (prop in col) {
        if (forEach(col[prop], prop)) {
            return col[prop];
        }
    }
    return false;
};

// array of objects
let people = [{
        name: 'John',
        age: 32,
        sex: 'M'
    }, {
        name: 'Mike',
        age: 24,
        sex: 'M'
    }, {
        name: 'Jen',
        age: 42,
        sex: 'F'
    }
];

// works with array of objects
var mike = find(people, function (val, key) {
        if (val.age === 24) {
            return true;
        }
        return false;
    });

console.log(mike.age); // 24


// Just an object
let obj = {
    foo: 'bar',
    salty: true,
    n: 42
};

var aNumber = find(obj, function (val, key) {
        if (typeof val === 'number') {
            return true;
        }
    });

console.log(aNumber); // 42
