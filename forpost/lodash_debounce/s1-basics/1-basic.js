let _ = require('lodash');

let bounced = _.debounce(() => {
    console.log('debounced');
}, 1000 * 5);
console.log('Calling bounced');
bounced(); // logs 'debounced' after 5 seconds