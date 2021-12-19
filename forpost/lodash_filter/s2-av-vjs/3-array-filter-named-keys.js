var a = {
    foo: 'bar',
    bool: false,
    n: 42,
    c: 7
};
// Vanilla js Array.filter will not just work on any object
// at least not by itself
var b = [].filter.call(a, function(val,key,obj){
    return typeof val === 'number';
});
console.log(b); // [];
// However an array of values can be created using something like
// The Object.values method, and then I can just call array filter
// off of that
let c = Object.values(a).filter(function(val,key,obj){
    return typeof val === 'number';
});
console.log(c); // [42, 7]
