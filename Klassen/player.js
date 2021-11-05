export class Player {
    constructor(playerName, points) {
        this.points = 0;
        this.deck = [];
        this.playerName = playerName;
        this.points = points;
        return this;
    }
    getPlayerName() {
        return this.playerName;
    }
    getplayer() {
        return { playerName: this.playerName, points: this.points };
    }
    setDeck(deck) {
        this.deck = deck;
    }
    getDeck() {
        return this.deck;
    }
    reciveStone() {
    }
    dropStone() {
    }
    addPoints(point) {
        return this.points += point;
    }
}
const player = new Player("", 1);
console.log(player.deck);
