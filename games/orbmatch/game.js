let Player = require('./player'),
Orb = require('./orb'),
Match = require('./match');

/*
let orb = new Orb();

let target = new Orb();

orb.targets.push(target);

//console.log('hp:' + orb.hp);
console.log('target: ' + JSON.stringify(orb.targets));

orb.active = true;
orb.onMove();
console.log('target: ' + JSON.stringify(orb.targets));
 */

//console.log('hp:' + orb.hp);


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

let printStatus = function (match) {

    console.log('********** **********');
    console.log('Turn Number: ' + match.turn);
    console.log('Current Player: ' + match.players[match.playerIndex].name);
    console.log('Players Orbs: ');

    match.players.forEach(function (player) {

        console.log('    player ' + player.name + ' orbs')
        player.pouch.forEach(function (orb) {

            console.log('    ' + JSON.stringify(orb));

        });

    });

    console.log('********** **********');

};

printStatus(match);

//console.log(JSON.stringify(match));
