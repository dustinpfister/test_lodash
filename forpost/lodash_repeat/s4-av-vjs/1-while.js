
let repeat = (str, c) => {
    str = str || '0';
    c = c || 1;
    let i = c,
    result = '';
    while (i--) {
        result += str;
    }
    return result;
}

let bil = '1' + repeat('0', 9);
console.log(bil); // 1000000000
