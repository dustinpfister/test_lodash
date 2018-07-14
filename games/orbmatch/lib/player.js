let _ = require('lodash');

let Player = function (options) {

    options = options || {};

    this.hp = 0;
    this.hpMax = 0;

    this.name = options.name || 'dustindawind';
    this.pouch = options.pouch || [];

    // update for first time
    this.update();

};

// figure current player stats
Player.prototype.update = function () {

    let p = this;

    p.hp = 0;
    p.hpMax = 0;

    _.each(this.pouch, function (orb) {

        p.hp += orb.hp;
        p.hpMax += orb.hpMax;

    });

};

module.exports = Player;
