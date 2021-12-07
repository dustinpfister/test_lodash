let _ = require('lodash');

// turn value to step in the loop function
let turn = 0;
// loop function created with debounce
let loop = _.debounce(() => {
    console.log('turn = ' + turn);
    turn += 1;
    // calling loop within loop
    loop();
}, 1000 * 3);
// calling loop for first time
loop();
