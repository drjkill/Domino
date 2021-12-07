import { Round } from "./round";
export class APlayer {
    constructor(playerName) {
        this.playerDeck = [];
        this.playerName = playerName;
        this.points = 0;
        return this;
    }
    getPlayerName() {
        return this.playerName;
    }
    setPlayerDeck(playerDeck) {
        this.playerDeck = playerDeck;
    }
    isDeckEmpty() {
        return this.playerDeck.length === 0;
    }
    steinPruefen(playerStone) {
        if (playerStone.getRightSide() === Round.gameArea[0].getLeftSide()) {
            return true;
        }
        else if (playerStone.getLeftSide() === Round.gameArea[Round.gameArea.length - 1].getRightSide()) {
            return true;
        }
        else {
            console.log("is nich Digga ");
            return false;
        }
    }
    reciveStone() {
        console.log(this.playerName + " recieved a Stone!");
        let stone = this.playerDeck.push();
        return this.stone;
    }
    addPoints() { return 0; }
}
