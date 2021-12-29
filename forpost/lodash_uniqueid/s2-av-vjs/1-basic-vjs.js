
let uniqueId = (function () {
    let num = 0;
    return function (prefix) {
        prefix = String(prefix) || '';
        num += 1;
        return prefix + num;
    }
}
    ());

let id = uniqueId('id_');

console.log(id); // 'id_1'

let i = 10, ids = [];
while (i--) {
    ids.push(uniqueId('id_'));
}

console.log(ids[0]); // id_2
console.log(ids[9]); // id_11
