import Card from './Card.js';
import Player from './Player.js';
import Dealer from './Dealer.js';
var Game = /** @class */ (function () {
    function Game(players) {
        this.cardSuits = ['spades', 'hearts', 'diamonds', 'clubs'];
        this.cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];
        this.players = [];
        this.cardDeck = [];
        this.playerTurn = 0;
        this.dealer = new Dealer();
        this.initializePlayers(players);
    }
    Game.prototype.initializePlayers = function (players) {
        var _this = this;
        players.forEach(function (player) { return _this.players.push(new Player(player)); });
    };
    Game.prototype.initializeNewDeck = function () {
        var _this = this;
        this.cardDeck = [];
        this.cardSuits.forEach(function (cardSuit) {
            _this.cardValues.forEach(function (cardValue) {
                _this.cardDeck.push(new Card(cardSuit, cardValue));
            });
        });
    };
    Game.prototype.startNewGame = function () {
        this.initializeNewDeck();
        this.dealFirstCards();
    };
    Game.prototype.dealFirstCards = function () {
        var _this = this;
        this.players.forEach(function (player) {
            player.drawCard(_this.cardDeck);
            player.drawCard(_this.cardDeck);
        });
        this.dealer.drawCard(this.cardDeck, true);
        this.dealer.drawCard(this.cardDeck, false);
    };
    Object.defineProperty(Game.prototype, "cardDeckLength", {
        get: function () {
            return this.cardDeck.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "currentPlayer", {
        get: function () {
            return this.players[this.playerTurn];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "allPlayers", {
        get: function () {
            return this.players;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "getDealer", {
        get: function () {
            return this.dealer;
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
export default Game;
