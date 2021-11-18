// and object with named keys rather than and array
// of array like object
let obj = {
    x: 42,
    y: 10,
    z: 5
};
// object keys and reduce
var sum = Object.keys(obj).reduce((acc, key) => {
    var n = obj[key];
    return acc + n;
}, 0);
console.log(sum); // 57
