let a = {
    0: 1,
    1: 2,
    2: 3
};
Object.keys(a).forEach((key) => {
    var n = a[key];
    console.log( Math.pow(2, n) );
});
// 2
// 4
// 8
