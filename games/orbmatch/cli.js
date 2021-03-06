/*
A CLI version of OrbMatch
 */

let Player = require('./lib/player'),
Orb = require('./lib/orb'),
fs = require('fs'),
Match = require('./lib/match');

// print status helper
let printStatus = function (match) {

    console.log('********** **********');
    console.log('Turn Number: ' + match.turn);
    console.log('Current Player: ' + match.players[match.activeIndex].name);
	console.log('active players:' + match.activePlayers);
    console.log('Players Orbs: ');

    match.players.forEach(function (player) {

        console.log('    player: ' + player.name);
        console.log('    hp: ' + player.hp + '\/' + player.hpMax);
        console.log('    orbs:');
        player.pouch.forEach(function (orb) {

            console.log('        ' + JSON.stringify(orb));

        });

    });

    console.log('********** **********');

};

let match = new Match({

        players: [
            new Player({
                name: 'dustin',
                pouch: [new Orb()]
            }),
            new Player({
                name: 'heather',
                pouch: [new Orb()]
            })
        ]

    });

let orb = match.players[0].pouch[0];
orb.active = true;
orb.targets.push(match.players[1].pouch[0]);

match.endTurn();
match.endTurn();

match.endTurn();
match.endTurn();

match.endTurn();
match.endTurn();

match.endTurn();
match.endTurn();

match.endTurn();
match.endTurn();

match.endTurn();
match.endTurn();

match.endTurn();
match.endTurn();

match.endTurn();
match.endTurn();

match.endTurn();
match.endTurn();


printStatus(match);
