import Card from './Card'

class Dealer {
	private cards: Card[] = []

	public drawCard(cardDeck: Card[], showCard: boolean) {
		const randomIndex = Math.floor(Math.random() * cardDeck.length)
		this.cards[
			this.cards.push(cardDeck.splice(randomIndex, 1)[0]) - 1
		].showCard = showCard
	}
}

export default Dealer