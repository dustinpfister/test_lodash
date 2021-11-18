// and object with named keys rather than and array
// of array like object
let obj = {
    x: 42,
    y: 10,
    z: 5
};
// object values and reduce
var sum = Object.values(obj).reduce((acc, n) => {
    return acc + n;
}, 0);
console.log(sum); // 57
