var nums = [1, 12, 7, 113];
var padded = nums.map(function (n) {
        return String('000' + n).slice(-3);
    });
console.log(padded);
// [ '001', '012', '007', '113' ]
