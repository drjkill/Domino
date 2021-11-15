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
    isDeckEmpty() {
        return this.playerDeck.length == 0;
    }
    dropStone() {
        const action = this.playerDeck.forEach((stone, index) => {
            if (this.playerDeck.length > 0) {
                if (stone.rightSide == this.round.gameArea[0].leftSide) {
                    this.round.gameArea.unshift(stone);
                    this.playerDeck.splice(index, 1);
                }
                else if (stone.leftSide == this.round.gameArea[this.round.gameArea.length - 1].rightSide) {
                    this.round.gameArea.push();
                    this.playerDeck.splice(index, 1);
                }
                else {
                    if (this.pool.pool.length > 0) {
                        this.playerDeck.push(this.pool.pool[0]);
                        this.pool.pool.splice(0, 1);
                    }
                    else {
                        console.log("Pool is empty!!");
                    }
                }
            }
            else {
                console.log(this.playerName + "Wins!");
            }
        });
        return action;
    }
    addPoints(point) {
        return this.points += point;
    }
}
