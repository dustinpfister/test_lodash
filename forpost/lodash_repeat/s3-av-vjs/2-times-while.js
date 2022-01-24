let times = (count, func) => {
    let i = count;
    while (i--) {
        func();
    }
};

let repeatArray = (arr, count) => {
    let str = '',
    arr2;
    times(3, () => {
        str += arr.join(',') + ',';
    });
    arr2 = str.split(',');
    arr2.pop();
    return arr2;
};

console.log( repeatArray([1,2,3], 3));
