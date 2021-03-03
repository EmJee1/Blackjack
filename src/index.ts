import BlackJack from './Game.js'

const players = ['EmJee', 'StanDeMan', 'SharpTShark', 'Daniel_E']

const blackJack = new BlackJack(players)
blackJack.startNewGame()
console.log(blackJack.getDealer)