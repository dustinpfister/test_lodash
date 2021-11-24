// the outer method
var throttle = function (func, rate) {
    var lastTime = new Date();
    func = func || function () {};
    rate = rate || 1000;
    // the inner method
    return function () {
        var now = new Date();
        if (now - lastTime >= rate) {
            func();
            lastTime = now;
        }
    };
};
// using it to make a function
// throttled at one sec
var sec = throttle(function () {
        console.log('one sec');
    }, 1000);
// using it in a loop
var loop = function () {
    setTimeout(loop, 33);
    sec();
};
loop();
