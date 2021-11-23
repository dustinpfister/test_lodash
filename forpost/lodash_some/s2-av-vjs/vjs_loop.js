let arr = ['foo', 42, null, 'baz'];

let i = arr.length,
some = false;
while (i--) {
    if (arr[i] === null) {
        some = true;
        break;
    }
}

console.log(some); // true
