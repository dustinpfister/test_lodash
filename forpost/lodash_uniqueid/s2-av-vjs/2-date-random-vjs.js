
let uniqueId = (function () {
    let c = 0,
    st = new Date();
    return function (prefix) {
        var t = new Date() - st,
        r = Math.floor(Math.random() * 1000),
        str;
        prefix = String(prefix) || '';
        str = '-' + c + '-' + t + '-' + r;
        c += 1;
        return prefix + str;
    }
}
    ());

console.log(uniqueId('id'));
console.log(uniqueId('id'));
console.log(uniqueId('id'));
setTimeout(function () {
    console.log(uniqueId('id'));
}, 1000);
/*
id-0-1-145
id-1-8-113
id-2-9-598
id-3-1018-910
*/
