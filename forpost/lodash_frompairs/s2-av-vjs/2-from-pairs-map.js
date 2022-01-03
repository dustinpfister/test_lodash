let fromPairs = function (arr) {
    let obj = {};
    let keys = arr.map((a) => { return a[0]; });
    let values = arr.map((a) => { return a[1]; });
    keys.forEach((key, i)=>{
        obj[key] = values[i];
    });
    return obj;
};
// demo
let arr = [['x', 1], ['y', 2], ['z', 3]];
console.log(fromPairs(arr));
// { x: 1, y: 2, z: 3 }
