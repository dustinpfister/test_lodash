
let sortedUniq = arr => {
    return [...new Set(arr)].sort()
};

let a = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4],
b = sortedUniq(a);

console.log(b); // [1,2,3,4];
