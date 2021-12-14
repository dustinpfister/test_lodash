// a 'collection' that is an 'array'
let a = [1, 2, 3];
// a 'collection' that is an 'array like object'
let b = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};
// a 'collection' that is an 'object with named public keys'
let c = {
    'zero': 1,
    'one': 2,
    'two': 3
};
// array for each will work fine with an array of course
a.forEach((n) => {
    console.log(n);
});
// for each will not just work with an array like object though
// as such I need to use something like the function call method

[].forEach.call(b, (n) => {
    console.log(n);
});
// or the array from static method
Array.from(b).forEach((n) => {
    console.log(n);
});
// Array for each will not just work with objects that have a named
// rather than numbered set of public keys, and no length property so
// something like the Object.values method needs to be used, or some kind
// of alternative to get it to work
Object.values(c).forEach((n) => {
    console.log(n);
});