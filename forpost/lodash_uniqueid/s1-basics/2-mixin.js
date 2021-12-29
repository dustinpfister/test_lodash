let _ = require('lodash');

_.mixin({
    // create a myUID
    getUID: () => {
        let count = parseInt(_.uniqueId()),
        n = count * 16,
        b = Math.floor(Math.pow(1.57, 42)),
        c = b + n,
        hex = c.toString(16),
        prefix = 'uh';
        return prefix + '_' + hex;
    },
    // break down
    breakUID: (str) => {
        let parts = str.split('_'),
        b =  Math.floor(Math.pow(1.57, 42)),
        hex = parts[1],
        c = parseInt(hex, 16);
        return {
            count: (c-b) / 16,
            n: c - b,
            b: b,
            c: c,
            hex: hex,
            prefix: parts[0]
        };
    }
});

console.log(_.getUID()); // uh_a122257
console.log(_.getUID()); // uh_a122267
console.log(_.getUID()); // uh_a122277

console.log( _.breakUID('uh_a122277') );
/*
{
    count: 3,
    n: 48,
    b: 168960583,
    c: 168960631,
    hex: 'a122277',
    prefix: 'uh'
}
*/
