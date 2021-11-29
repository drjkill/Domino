export class Player {
    constructor(playerName) {
        this.points = 0;
        this.playerDeck = [];
        this.playerName = playerName;
        this.playerDeck = this.playerDeck;
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
    canDropStone(playerStone) {
        if (this.round.steinPruefen(playerStone) == true) {
            this.dropStone();
        }
        else {
            this.reciveStone();
        }
    }
    dropStone() {
        console.log(this.playerName + " has dropped a Stone!");
        const playerStone = this.playerDeck.pop();
        if (!playerStone) {
            throw new Error('keine Steine mehr');
        }
        return playerStone;
    }
    ;
    reciveStone() {
        console.log(this.playerName + " recieved a Stone!");
        let stone = this.playerDeck.push();
        return this.stone;
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
