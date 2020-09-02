
let s = new Set(),
arr = [];
[[1, 2, 3], [6], [3, 2, 4, 1], [5, 4]].forEach(function (arr) {
    arr.forEach(function (n) {
        s.add(n);
    });
});

console.log(s);
// Set { 1, 2, 3, 6, 4, 5 }
