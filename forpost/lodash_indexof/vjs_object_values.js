let findIndexes = (arr, term) => {
    let indexes = [];
    Object.values(arr).forEach((el, i) => {
        if (el === term) {
            indexes.push(i);
        }
    });
    return indexes;
};

let indexes = findIndexes(['zero', 'one', 'two', 'three', 'two'], 'two');

// the first one
console.log(indexes[0]); // 2
// all of them
console.log(indexes); // [2,4]

