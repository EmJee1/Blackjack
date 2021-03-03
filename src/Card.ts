class Card {
	private suit: string
	private value: string | number
	private shown: boolean = false

	constructor(suit: string, value: string | number) {
		this.suit = suit
		this.value = value
	}

	set showCard(bool: boolean) {
		this.shown = bool
	}
}

export default Card