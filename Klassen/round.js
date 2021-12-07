import { Pool } from "./pool.js";
export class Round {
    constructor(players) {
        this.gameArea = [];
        this.players = [];
        this.deck = [];
        this.players = players;
        const pool = new Pool();
        this.pool = pool;
        this.setUpDeck();
        this.setUpGameArea();
    }
    setUpDeck() {
        this.players.forEach(player => {
            player.setPlayerDeck(this.pool.getPlayerDeck());
        });
    }
    setUpGameArea() {
        this.setGameArea(this.pool.getGameArea());
    }
    setGameArea(gameArea) {
        this.gameArea = gameArea;
    }
    getGameArea() {
        return this.gameArea;
    }
    getPool() {
        return this.pool;
    }
    addPlayer(player) {
        this.players.push(player);
        return player;
    }
    hasRoundEndet() {
        for (let player of this.players) {
            if (player.isDeckEmpty()) {
                return true;
            }
        }
        ;
        return false;
    }
    pushStoneToGameArea(playerStone) {
        if (playerStone.getRightSide() === this.gameArea[0].getLeftSide()) {
            this.gameArea.unshift(playerStone);
        }
        else if (playerStone.getLeftSide() === this.gameArea[this.gameArea.length - 1].getRightSide()) {
            this.gameArea.push(playerStone);
        }
        else {
            console.log("is nich Digga ");
        }
    }
    play() {
        while (this.hasRoundEndet() == false) {
            this.players.forEach(player => {
                const playerStone = player.dropStone();
                if (player.steinPruefen(playerStone) == true) {
                    this.pushStoneToGameArea(playerStone);
                    console.log(player.playerName + " deck is empty = " + player.isDeckEmpty());
                }
            });
        }
        this.players.forEach(player => {
            player.addPoints();
        });
    }
}
Round.gameArea = [];
