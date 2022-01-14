let data = [2, 4, 6, 8, 9],
kill = [4, 8];
// Using Array.filter and Array.some
let result = data.filter(function (n) {
    return !kill.some(function (kn) {
        return kn === n;
    });
});
console.log(result); // [2, 6, 9]
