let arr = [1, 2, 'foo', 3, 'bar', 4];

arr = arr.filter((el) => {
        return typeof el == 'number';
    });

console.log(arr);
