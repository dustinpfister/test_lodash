let _ = require('lodash');

// a Match instance between two players
let Match = function (options) {

    options = options || {};

    this.players = options.players || [];
    this.activePlayers = []; // indexes of players that are active
    this.turn = 0;

    this.activeIndex = 0; // the index of the current player who has to move
    this.findActivePlayers();

};

// set an array of indexes for current active players
Match.prototype.findActivePlayers = function () {

    let match = this;

    match.activePlayers = [];

    _.each(this.players, function (player, i) {

        if (player.hp > 0) {

            match.activePlayers.push(i);

        }

    });

};

// end the current turn
Match.prototype.endTurn = function () {

    let match = this;

    // call Orb.onMove for all orbs of current player
    _.each(this.players[this.activeIndex].pouch, function (orb) {

        orb.onMove();

    });


    // update active players
    _.each(this.activePlayers, function (activeIndex) {

        match.players[activeIndex].update();

    });

    // find active player count
    match.findActivePlayers();

    if (match.activePlayers.length >= 2) {

        // step playindex, and turn
        this.activeIndex += 1;
        if (this.activeIndex === this.activePlayers.length) {
            this.activeIndex = 0;
            this.turn += 1;

        }

    }

}

module.exports = Match;
