// vjs for each and key by collection methods
let vjsEach = (source, func) => {
    Object.keys(source).forEach(function (key, i, keys) {
        func.call(source, source[key], key, source, i, keys)
    });
};
 
let vjsKeyBy = (source, func) => {
    let obj = {};
    vjsEach(source, function (val, key) {
        obj[func(val, key, source)] = val;
    });
    return obj;
};
 
// DEMO of vjsKeyby
let source = {
    "bar": {x: 5, y: 37, id: 1},
    "foo": {x: 0, y: 0, id: 7}
};
let a = vjsKeyBy(source, function(val){
    return val.id;
});
console.log(a);
// { '1': { x: 5, y: 37, id: 1 }, '7': { x: 0, y: 0, id: 7 } }
