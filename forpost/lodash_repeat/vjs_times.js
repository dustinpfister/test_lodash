let times = (count, func) => {
    let i = count;
    while (i--) {
        func();
    }
};
let arr = [1, 2, 3],
str = '';
times(3, () => {
    str += arr.join(',') + ',';
});
let arr2 = str.split(',');
arr2.pop();
console.log(arr2);
