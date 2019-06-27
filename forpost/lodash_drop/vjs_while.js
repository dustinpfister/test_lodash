let drop = (arr, count) => {
    let newArr = [],
    len = arr.length,
    i = count = count === undefined ? 1 : count;
    while (i < len) {
        newArr.push(arr[i]);
        i += 1;
    }
    return newArr;
};

let arr = [1, 2, 3, 4, 5, 6],
newArr = drop(arr, 3);
console.log(newArr);
console.log(arr);
