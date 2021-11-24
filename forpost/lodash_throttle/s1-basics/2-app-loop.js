let _ = require('lodash');

// state machine object
var sm = {
    currentState: 'init',
    states: {},
    lt: new Date()
};
// init state
sm.states.init = {
    update: function (sm, secs) {
        console.log('starting app');
        sm.currentState = 'game';
    }
};
// game state
sm.states.game = {
    update: function (sm, secs) {
        console.log('game update ' + secs);
    }
};
// update method created with lodash throttle
var update = _.throttle(function () {
        var state = sm.states[sm.currentState],
        now = new Date(),
        secs = (now - sm.lt) / 1000;
        state.update.call(sm, sm, secs);
        sm.lt = now;
    }, 1000);
// app loop calling the update method
var loop = function () {
    setTimeout(loop, 100);
    update();
};
// start loop
loop();
