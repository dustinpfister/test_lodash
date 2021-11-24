let _ = require('lodash');

// state machine object
var sm = {
    currentState: 'init',
    states: {},
    lt: new Date(),
    game: {}
};
// init state
sm.states.init = {
    update: function (sm, secs) {
        console.log('starting app');
        sm.game = {
            money: 1000,
            moneyPerSec: 32
        };
        sm.currentState = 'game';
    }
};
// game state
sm.states.game = {
    update: function (sm, secs) {
        sm.game.money += sm.game.moneyPerSec * secs;
        console.log('game update, money: ' + sm.game.money.toFixed(2));
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
