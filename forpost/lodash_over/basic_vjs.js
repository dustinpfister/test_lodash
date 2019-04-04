let _ = require('lodash');

let a = (x, y) => {
    return x + y;
},
b = (x, y) => {
    return x * y;
}

let over = function (funcs) {
    return function () {
        let result = [];
        funcs.forEach((func) => {
            result.push(func.apply(null, Array.from(arguments)));
        });
        return result;
    }
};

let c = over([a,b]);

console.log( c(10,2) ); // [12,20]
