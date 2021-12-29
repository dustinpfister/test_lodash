let _ = require('lodash');

let id = _.uniqueId('id_');

console.log(id); // 'id_1'

let i = 10, ids = [];
while (i--) {
    ids.push(_.uniqueId('id_'));
}

console.log(ids[0]); // id_2
console.log(ids[9]); // id_11

