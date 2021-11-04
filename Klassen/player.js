export class Player {
    constructor(playerName) {
        this.points = 0;
        this.deck = [];
        this.playerName = playerName;
        return this;
    }
    getPlayerName() {
        return this.playerName;
    }
    getplayer() {
        return { playerName: this.playerName, points: this.points };
    }
    getDeck() {
    }
    reciveStone() {
    }
    dropStone() {
    }
    addPoints(point) {
        return this.points += point;
    }
}
