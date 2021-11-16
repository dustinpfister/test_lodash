let _ = require('lodash');

var cards = [
    {suit: 'clubs', val: '1', desc: 'ace'},
    {suit: 'spades', val: '11', desc: 'jack'},
    {suit: 'hearts', val: '5', desc: '5'},
    {suit: 'hearts', val: '6', desc: '6'},
    {suit: 'diamonds', val: '7', desc: '7'},
    {suit: 'clubs', val: '13', desc: 'king'},
    {suit: 'hearts', val: '12', desc: 'queen'},
];
 
_.each(_.partition(cards, function(card){
   return card.val >= 11;
}), function(part){
    console.log('** part: ' + i + ' **');
    _.each(part, function(card){
        console.log(card.desc);
    });
});