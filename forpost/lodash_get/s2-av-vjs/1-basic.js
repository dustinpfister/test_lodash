let enemy = {
    // enemy health
    health: {
        current: 80,
        max: 100,
        healRate: {
            active: false,
            perTick: 5
        }
    },
    // index values of targets
    targets: [2, 6, 8]
};
// vanilla js
console.log(enemy.health.healRate.active); // false
console.log(enemy['health']['healRate']['active']); // false
