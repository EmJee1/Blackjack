import BlackJack from './Game.js';
var players = ['EmJee', 'StanDeMan', 'SharpTShark', 'Daniel_E'];
var blackJack = new BlackJack(players);
blackJack.startNewGame();
console.log(blackJack.getDealer);
