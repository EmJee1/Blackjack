var Player = /** @class */ (function () {
    function Player(playerName) {
        this.cards = [];
        this.playerName = playerName.toString();
    }
    Player.prototype.drawCard = function (cardDeck) {
        var randomIndex = Math.floor(Math.random() * cardDeck.length);
        this.cards[this.cards.push(cardDeck.splice(randomIndex, 1)[0]) - 1].showCard = true;
    };
    return Player;
}());
export default Player;
