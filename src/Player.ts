import Card from './Card'

class Player {
	private playerName: string
	private cards: Card[] = []

	constructor(playerName: string | number) {
		this.playerName = playerName.toString()
	}

	public drawCard(cardDeck: Card[]) {
		const randomIndex = Math.floor(Math.random() * cardDeck.length)
		this.cards[
			this.cards.push(cardDeck.splice(randomIndex, 1)[0]) - 1
		].showCard = true
	}
}

export default Player