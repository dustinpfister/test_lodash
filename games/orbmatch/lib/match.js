let _ = require('lodash');

// a Match instance between two players
let Match = function (options) {

    options = options || {};

    this.players = options.players || [];
    this.activePlayers = []; // indexes of players that are active
    this.turn = 0;
    this.playerIndex = 0; // the index of the current player who has to move

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

    let gameOver = false,
    match = this;

    // call Orb.onMove for all orbs of current player
    _.each(this.players[this.playerIndex].pouch, function (orb) {

        orb.onMove();

    });

    // update players
    //_.each(this.players, function (player) {

    //    player.update();

    //});

    //update active players
    _.each(this.activePlayers, function (playerIndex) {

        match.players[playerIndex].update();

    });

    match.findActivePlayers();

    if (!gameOver) {

        // step playindex, and turn
        this.playerIndex += 1;
        if (this.playerIndex === this.players.length) {
            this.playerIndex = 0;
            this.turn += 1;

        }

    }

}

module.exports = Match;
