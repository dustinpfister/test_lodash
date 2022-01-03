let fromPairs = function (arr) {
    let obj = {};
    arr.forEach((pairs, i)=>{
        obj[pairs[0]] = pairs[1];
    });
    return obj;
};
// demo
let arr = [['x', 1], ['y', 2], ['z', 3]];
console.log(fromPairs(arr));
// { x: 1, y: 2, z: 3 }
