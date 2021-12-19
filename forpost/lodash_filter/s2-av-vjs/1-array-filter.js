var obj = {
    foo: 'bar',
    bool: false,
    n: 42,
    c: 7
};

// Vanilla js Array.filter will not just work on any object
var numbers = [].filter.call(obj, function(val,key,obj){
    return typeof val === 'number';
});
console.log(numbers); // [];
 
// but it will work on 'array like' objects
var numbers = [].filter.call({
    0 : 'foo',
    1: 'man',
    2: 7,
    length: 3
}, function(val,key,obj){
    return typeof val === 'number';
});
console.log(numbers); // [7]