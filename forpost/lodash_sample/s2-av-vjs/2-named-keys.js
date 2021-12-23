let obj = {
    foo: 40,
    bar: 2,
    baz: 7
};
var values = Object.values(obj);
var n =  values[ Math.floor( values.length * Math.random() ) ];
console.log(n);
