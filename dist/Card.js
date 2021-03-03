var Card = /** @class */ (function () {
    function Card(suit, value) {
        this.shown = false;
        this.suit = suit;
        this.value = value;
    }
    Object.defineProperty(Card.prototype, "showCard", {
        set: function (bool) {
            this.shown = bool;
        },
        enumerable: false,
        configurable: true
    });
    return Card;
}());
export default Card;
