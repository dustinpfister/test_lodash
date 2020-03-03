var pull = function (arr) {

    var len = arguments.length,
    val,
    i = 1;

    if (arguments.length <= 1) {
        return arr || [];
    }
    while (i < len) {
        val = arguments[i];
        arr = arr.filter(function (el) {
                return el != val;
            });
        i += 1;
    }
    return arr;
};


var arr = [-1, 5, 7, NaN, -1, -1, 8, 7];
arr = pull(arr, -1, NaN);

console.log(arr.join(':'));