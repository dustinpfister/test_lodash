var obj = {
    foo: 'bar',
    bool: false,
    n: 42,
    c: 7
};
// Vanilla js Array.filter will not just work on any object
// at least not by itself
var numbers = [].filter.call(obj, function(val,key,obj){
    return typeof val === 'number';
});
console.log(numbers); // [];