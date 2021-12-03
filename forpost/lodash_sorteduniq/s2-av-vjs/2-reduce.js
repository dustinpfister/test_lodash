let sortedUniq = (arr) => {
    return arr.reduce((acc, el) => {
        if (!acc.some((c) => {
            return Object.is(c, el);
        })){
            acc.push(el);
        }
        return acc;
    }, []).sort();
};

let a = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4],
b = sortedUniq(a);
console.log(b);
