let sortedUniq = (arr) => {
    let b = [];
    return arr.reduce((acc, el) => {
        if (!b.some((c) => {
            return c === el;
        })){
            b.push(el);
            acc.push(el);
        }
        return acc;
    }, []).sort();
};

let a = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4],
b = sortedUniq(a);
console.log(b);

/*
let sortedUniq = arr => {
return [...new Set(arr)].sort();
};

let a = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4],
b = sortedUniq(a);

console.log(b); // [1,2,3,4];
*/
