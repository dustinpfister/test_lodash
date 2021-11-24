// the outer method
var throttle2 = function (func, rate) {
    var lastTime = new Date(),

    getTime = function () {
        var now = new Date();
        return {
            now: now,
            time: now - lastTime
        }
    };

    func = func || function () {};
    rate = rate || 1000;

    // the inner method and api
    var api = function () {
        var t = getTime();
        if (t.time >= rate) {
            func(t.time);
            lastTime = t.now;
        }
    };
    // now method
    api.now = function () {
        var t = getTime();
        func(t.time);
        lastTime = t.now;
    };
    // setRate
    api.setRate = function (r) {
        rate = r;
    };

    return api;
};

// using it in a loop
var i = 0, iMax = 50, per, bias, rate = 0;

var throt = throttle2(function (time) {

        per = i / iMax;
        bias = 1 - Math.abs(0.5 - per) / 0.5;
        rate = 25 + 475 * bias;

        console.log(
            'tick time: ' + ('0000' + String(time)).slice(-4) + '; ' +
            'bias: ' + bias.toFixed(2) + '; ' +
            'rate: ' + Math.round(rate));

        i += 1;
        i %= iMax;
    });

var loop = function () {
    setTimeout(loop, 33);
    throt();
    throt.setRate(rate);

};
loop();
