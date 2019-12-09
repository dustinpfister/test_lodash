let arr1 = [1, 4, 5, NaN],
arr2 = [1, 2, 1, NaN],
arr3 = [1, 4, 5];

let result = arr1.filter((x) => {
        return arr2.some((y) => {
            return Object.is(x, y);
        });
    });

console.log(result);
