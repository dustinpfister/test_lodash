
let clone = (arr) => {
    return arr.map((n) => {
        return n
    });
};

let mkNumSort = (dec) => {
    dec = dec === undefined ? false : dec;
    return (a, b) => {
        if (a > b) {
            return dec ? -1 : 1;
        }
        if (a < b) {
            return dec ? 1 : -1;
        }
        return 0;
    }
};

let nums = [5, 42, -5, 7, 6, 3, 52, 27, 158, -1],
asc = clone(nums).sort(mkNumSort(false)),
desc = clone(nums).sort(mkNumSort(true));

console.log(asc, desc, nums);

// [ -5, -1, 3, 5, 6, 7, 27, 42, 52, 158 ]
// [ 158, 52, 42, 27, 7, 6, 5, 3, -1, -5 ]
// [5, 42, -5, 7, 6, 3, 52, 27, 158, -1]
