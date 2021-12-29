let _ = require('lodash');

_.mixin({
    myUID: () => {
        let count = parseInt(_.uniqueId()),
        n = count * 16,
        b = Math.floor(Math.pow(1.57, 42)),
        c = b + n,
        hex = c.toString(16),
        prefix = 'uh';
        return prefix + '_' + hex;
    }
});

console.log(_.myUID()); // uh_a122257
console.log(_.myUID()); // uh_a122267
console.log(_.myUID()); // uh_a122277