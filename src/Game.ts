import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'

class Game {
	private cardSuits = ['spades', 'hearts', 'diamonds', 'clubs'] as const
	private cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'] as const
	private players: Player[] = []
	private cardDeck: Card[] = []
	private playerTurn: number = 0
	private dealer = new Dealer()

	constructor(players: string[]) {
		this.initializePlayers(players)
	}

	private initializePlayers(players: string[]) {
		players.forEach(player => this.players.push(new Player(player)))
	}

	private initializeNewDeck() {
		this.cardDeck = []
		this.cardSuits.forEach(cardSuit => {
			this.cardValues.forEach(cardValue => {
				this.cardDeck.push(new Card(cardSuit, cardValue))
			})
		})
	}

	public startNewGame() {
		this.initializeNewDeck()
		this.dealFirstCards()
	}

	private dealFirstCards() {
		this.players.forEach(player => {
			player.drawCard(this.cardDeck)
			player.drawCard(this.cardDeck)
		})

		this.dealer.drawCard(this.cardDeck, true)
		this.dealer.drawCard(this.cardDeck, false)
	}

	get cardDeckLength() {
		return this.cardDeck.length
	}

	get currentPlayer() {
		return this.players[this.playerTurn]
	}

	get allPlayers() {
		return this.players
	}

	get getDealer() {
		return this.dealer
	}
}

export default Game