let _ = require('lodash');

let Player = function(options){

  options = options || {};

  this.name = options.name || 'dustindawind';
  this.pouch = options.pouch || [];

};

module.exports = Player;