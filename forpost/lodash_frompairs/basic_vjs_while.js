
let arr = [['x', 1], ['y', 2], ['z', 3]];

let i = 0, len = arr.length, pair, obj = {};
while (i < len) {
    pair = arr[i];
    obj[pair[0]] = pair[1];
    i += 1;
}

console.log(obj);
// { x: 1, y: 2, z: 3 }
