var remove = function (arr, forEach) {
    var i = arr.length;
    while (i--) {
        if (forEach(arr[i])) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

var nums = [-1, 3, -3, -4, 5, 0, 7];

console.log(remove(nums, function (n) {
        return n <= 0;
    }));
