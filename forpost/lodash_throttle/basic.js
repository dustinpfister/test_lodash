let _ = require('lodash');

// call once every 1000ms
var sec = _.throttle(function () {
        console.log('every second');
    }, 1000);
// call every 100ms
var hundredMS = _.throttle(function () {
        console.log('every one hundred ms');
    }, 100);
// a loop for every 33ms
var loop = function () {
    setTimeout(loop, 33)
    sec();
    hundredMS();
};
// start loop
loop();
