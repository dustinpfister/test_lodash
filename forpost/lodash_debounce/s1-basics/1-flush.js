let _ = require('lodash');

var check = _.debounce(() => {
    console.log('checking something...');
    check();
},60000);
check();
check.flush(); // check now