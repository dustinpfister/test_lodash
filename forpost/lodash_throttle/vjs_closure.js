var throttle = function (func, rate) {
    var lastTime = new Date();
    func = func || function () {};
    rate = rate || 1000;
    // define the api
    return function () {
        var now = new Date();
        if (now - lastTime >= rate) {
            func();
            lastTime = now;
        }
    };
};

var sec = throttle(function () {
        console.log('one sec');
    }, 1000);

var loop = function () {
    setTimeout(loop, 33);
    sec();
};

loop();
