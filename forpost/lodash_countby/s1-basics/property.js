let _ = require('lodash');
console.log(_.countBy(['foo', 'man', 'chew', 'happy', 'bar'], (el) => {
        return _.property('length')(el)
    }));
