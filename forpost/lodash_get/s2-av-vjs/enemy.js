let _ = require('lodash');

let Enemy = function (opt) {

    // dead on not healing
    this.health = {};

    // no targets
    this.targets = []

};

Enemy.prototype.healPerTick = function () {

    var perTick = _.get(this, 'health.heal.perTick', defaultValue = {
                active: false,
                amount: 0
            });

    if (perTick.active) {

        this.health.current += perTick.amount;

        if (this.health.current > this.health.max) {

            this.health.current = this.health.max;

        }

    }

};

var e = new Enemy();

e.healPerTick();

console.log(e);