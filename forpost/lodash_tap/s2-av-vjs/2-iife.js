let a = [1, 2, 3, 4, 5]

// IIFE
let b = (function () {
    return {
        tap: function (cb) {
            a.map((n) => {
                return Math.pow(n, 2);
            });
            cb(a);
            return a;
        }
    }
}()).tap(function (a) {
    a[3] = 0;
});

console.log(b);
//[ 1, 4, 9, 0, 25 ]
