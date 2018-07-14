let Player = require('./player'),
Orb = require('./orb'),
Match = require('./match');

let orb = new Orb();

let target = new Orb();

orb.targets.push(target);

//console.log('hp:' + orb.hp);
console.log('target: ' + JSON.stringify(orb.targets));

orb.active = true;
orb.onMove();
console.log('target: ' + JSON.stringify(orb.targets));


//console.log('hp:' + orb.hp);


/*
let match = new Match({

    players : [
        new Player({name:'dustin'}),
        new Player({name:'john'})

    ]

});

match.endTurn();
match.endTurn();
match.endTurn();
match.endTurn();
match.endTurn();

console.log(match);
*/