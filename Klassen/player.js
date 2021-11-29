import { APlayer } from './APlayer';
export class Player extends APlayer {
    constructor(playerName) {
        super(playerName);
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
    canDropStone(playerStone) {
        if (this.steinPruefen(playerStone) == true) {
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
}
