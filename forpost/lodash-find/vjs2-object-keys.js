var col = [7, 8, 13, -5, 32, 2.5];

var keys = Object.keys(col),
i = keys.length,
results = [];
while (i--) {
    var p = Math.log(col[keys[i]]) / Math.log(2);
    if (p > 0 && String(p).indexOf('.') === -1) {
        results.push(col[keys[i]]);
    }
}
console.log(results); // [32,8]
