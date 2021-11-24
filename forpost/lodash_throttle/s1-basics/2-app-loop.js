let _ = require('lodash');

var sm = {
    currentState: 'init',
    states: {},
    lt: new Date()
};

sm.states.init = {
    update: function (sm, secs) {
        console.log('starting app');
        sm.currentState = 'game';
    }
};

sm.states.game = {
    update: function (sm, secs) {
        console.log('game update ' + secs);
    }
};

var update = _.throttle(function () {
        var state = sm.states[sm.currentState],
        now = new Date(),
        secs = (now - sm.lt) / 1000;
        state.update.call(sm, sm, secs);
        sm.lt = now;
    }, 1000);

var loop = function () {
    setTimeout(loop, 100);
    update();
};
// start loop
loop();
