
let words = (str, pat, uc) => {
    pat = pat || /\w+/g;
    str = uc ? str : str.toLowerCase();
    return str.match(pat);
};

console.log(words('JavaScript is fun!'));
// [ 'javascript', 'is', 'fun' ]
console.log(words('JavaScript is fun!', /\w+[!?.]|\w+/g, true));
// [ 'JavaScript', 'is', 'fun!' ]
