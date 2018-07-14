let _ = require('lodash');

let Orb = function(){

    this.active = false; // active, or passive state
    this.targets = []; // an array of one or more target Orbs to attack

    this.hpMax = 15;
    this.hp = this.hpMax; //Math.floor(this.hpMax * .75);
    this.attack = [4,8];
    this.defence = [0,3];
    this.heal = 1;

};

Orb.prototype.toggleActive = function(){

    this.active = !this.active;

};

// The Orb is being attacked by another Orb.
Orb.prototype.attackedBy = function(attacker){

   let attack = _.random(attacker.attack[0], attacker.attack[1],false),
   defence = _.random(this.defence[0], this.defence[1],false),

   damage = attack - defence;

   console.log(damage);

   if(damage < 0){

       damage = 0;

   }

   this.hp -= damage;
   if(this.hp < 0){
       this.hp = 0;
   }

};

// what the orb is to do when it is time to move
Orb.prototype.onMove = function(){

    let orb = this;

    if(orb.active){

        _.each(this.targets, function(target){

            //target.hp -= orb.attack;

            target.attackedBy(orb);

        });

    }else{

        orb.hp += orb.heal;

        if(orb.hp > orb.hpMax){

            orb.hp = orb.hpMax;

        }

    }

};

module.exports = Orb;