// pattern used to match Latin letters in lodash deburr source code
// https://github.com/lodash/lodash/blob/master/deburr.js
const reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g

let str = 'Jalapeño';
str = str.replace(reLatin, '*');
console.log(str); // Jalape*o
