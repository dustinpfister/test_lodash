let source = {
    "bar": {x: 5, y: 37, id: 1},
    "foo": {x: 0, y: 0, id: 7}
};
// using Object.keys to get an array of key named for
// the source object. I can then use that key to get the value
// for each key in the source object also and do whatever I need to
// do when it comes to creating a new object
let a = {};
Object.keys(source).forEach(function(key){
    let value = source[key];
    a[value.id] = value;
});
console.log(a);
// { '1': { x: 5, y: 37, id: 1 }, '7': { x: 0, y: 0, id: 7 } }