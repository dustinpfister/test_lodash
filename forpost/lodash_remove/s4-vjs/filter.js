let arr = [1, 2, 'foo', 3, 'bar', 4];
// creating a new array with array filter
// and setting that new array as the object for the
// same variable
arr = arr.filter((el) => {
        return typeof el == 'number';
    });
console.log(arr);
//[ 1, 2, 3, 4 ]
