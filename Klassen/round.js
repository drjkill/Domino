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
        if (playerStone.rightSide === this.gameArea[0].leftSide) {
            this.gameArea.unshift(playerStone);
        }
        else if (playerStone.leftSide === this.gameArea[this.gameArea.length - 1].rightSide) {
            this.gameArea.push(playerStone);
        }
        else {
            console.log("is nich Digga ");
        }
    }
    steinPruefen(playerStone) {
        if (playerStone.rightSide === this.gameArea[0].leftSide) {
            return true;
        }
        else if (playerStone.leftSide === this.gameArea[this.gameArea.length - 1].rightSide) {
            return true;
        }
        else {
            console.log("is nich Digga ");
            return false;
        }
    }
    play() {
        while (this.hasRoundEndet() == false) {
            this.players.forEach(player => {
                console.table(this.gameArea);
                console.log("======================================");
                console.table(this.players[0].playerDeck);
                console.table(this.players[1].playerDeck);
                console.table(this.players[2].playerDeck);
                console.table(this.players[3].playerDeck);
                console.log("======================================");
                const playerStone = player.dropStone();
                if (this.steinPruefen(playerStone) == true) {
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
