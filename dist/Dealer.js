var Dealer = /** @class */ (function () {
    function Dealer() {
        this.cards = [];
    }
    Dealer.prototype.drawCard = function (cardDeck, showCard) {
        var randomIndex = Math.floor(Math.random() * cardDeck.length);
        this.cards[this.cards.push(cardDeck.splice(randomIndex, 1)[0]) - 1].showCard = showCard;
    };
    return Dealer;
}());
export default Dealer;
