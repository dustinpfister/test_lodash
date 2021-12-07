let _ = require('lodash');

let check = _.debounce(() => {
    console.log('checking something...');
    check();
}, 1000 * 3);
check();
check.flush(); // check now