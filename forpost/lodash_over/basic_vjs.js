let over = function (funcs) {
    return function () {
        let result = [];
        funcs.forEach((func) => {
            result.push(func.apply(null, Array.from(arguments)));
        });
        return result;
    }
};

let a = (x, y) => {
    return x + y;
},
b = (x, y) => {
    return x * y;
},
c = over([a,b]);

console.log( c(10,2) ); // [12,20]
