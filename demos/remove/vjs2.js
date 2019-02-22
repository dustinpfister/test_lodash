var enemies = [{
        hp: -1,
        x: 0,
        y: 12
    }, {
        hp: 25,
        x: 43,
        y: 13
    }, {
        hp: 30,
        x: 17,
        y: 3
    }, {
        hp: 0,
        x: 5,
        y: 74
    }
],
ei = 0;
while (ei < enemies.length) {

    var enemy = enemies[ei];
    console.log(ei, enemy)
    if (enemy.hp <= 0) {
        enemies.splice(ei, 1);
    }

    ei += 1;
}

console.log(enemies);
