// so if I am just removing elements
// that is not a problem
var arr = [1, -2, 3, -4, 5],
i = 0, len = arr.length;
while (i < len) {

    var el = arr[i];
    if (el < 0) {
        arr.splice(i, 1);
    }

    i += 1;
}

console.log(arr);
