let _ = require('lodash');

// a Match instance between two players
let Match = function (options) {

    options = options || {};

    this.players = options.players || [];
    this.turn = 0;
    this.playerIndex = 0; // the index of the current player who has to move

};

// end the current turn
Match.prototype.endTurn = function () {

    // call Orb.onMove for all orbs of current player
    _.each(this.players[this.playerIndex].pouch, function (orb) {

        orb.onMove();

    });

    // step playindex, and turn
    this.playerIndex += 1;
    if (this.playerIndex === this.players.length) {
        this.playerIndex = 0;
        this.turn += 1;

    }

}

module.exports = Match;
