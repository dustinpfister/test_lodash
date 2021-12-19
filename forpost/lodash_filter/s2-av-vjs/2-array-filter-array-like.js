// The function call method can be used to get array filter
// to work with an array like object
let a = {
    0 : 'foo',
    1: 'man',
    2: 7,
    length: 3
};
var numbers = [].filter.call(a, function(val, key, obj){
    return typeof val === 'number';
});
console.log(numbers); // [7]