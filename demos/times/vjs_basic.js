// basic vanilla javaScript lodash times method clone
let times = (count, func) => {
    var i = 0,
    results = [];
    while (i < count) {
        results.push(func(i));
        i += 1;
    }
    return results;
};

// looks good
let nums = times(10, (i) => {
        return Math.pow(2, i);
    });
console.log(nums);
// [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 ]
