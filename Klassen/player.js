export class Player {
    constructor(playerName, points) {
        this.points = 0;
        this.playerDeck = [];
        this.playerName = playerName;
        this.points = points;
        return this;
    }
    getplayer() {
        return { playerName: this.playerName, points: this.points };
    }
    setPlayerDeck(playerDeck) {
        this.playerDeck = playerDeck;
    }
    getPlayerDeck() {
        return this.playerDeck;
    }
    playStone() {
        const action = this.playerDeck.forEach(stone => {
            while (this.playerDeck.length > 0) {
                console.table(this.playerDeck);
                this.playerDeck.splice(0, 1);
                console.log(this.playerName + "drop Stone!");
            }
        });
        return action;
    }
    addPoints(point) {
        return this.points += point;
    }
}
const player = new Player("Testplayer", 1);
