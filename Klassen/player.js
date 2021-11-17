export class Player {
    constructor(playerName) {
        this.points = 0;
        this.playerDeck = [];
        this.playerName = playerName;
        return this;
    }
    setPlayerDeck(playerDeck) {
        this.playerDeck = playerDeck;
    }
    getPlayerDeck() {
        return this.playerDeck;
    }
    isDeckEmpty() {
        return this.playerDeck.length === 0;
    }
    dropStone() {
        console.log(this.playerName + " has dropped a Stone!");
    }
    ;
    reciveStone() {
    }
    addPoints() {
        let roundPoint = 0;
        for (let i = 0; i < this.playerDeck.length; i++) {
            const stonepoints = this.playerDeck[i].leftSide + this.playerDeck[i].rightSide;
            roundPoint += stonepoints;
        }
        return this.points += roundPoint;
    }
}
