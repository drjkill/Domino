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
        this.players.forEach(player => {
            if (player.isDeckEmpty()) {
                return true;
            }
        });
        return false;
    }
    play() {
        this.players.forEach(player => {
            const action = player.playerDeck.forEach((stone, index) => {
                if (player.playerDeck.length > 0) {
                    if (stone.rightSide == this.gameArea[0].leftSide) {
                        this.gameArea.unshift(stone);
                        player.playerDeck.splice(index, 1);
                    }
                    else if (stone.leftSide == this.gameArea[this.gameArea.length - 1].rightSide) {
                        this.gameArea.push();
                        player.playerDeck.splice(index, 1);
                    }
                    else {
                        if (this.pool.pool.length > 0) {
                            player.playerDeck.push(this.pool.pool[0]);
                            this.pool.pool.splice(0, 1);
                        }
                        else {
                            console.log("Pool is empty!!");
                        }
                    }
                }
                else {
                    console.log(player.playerName + "Wins!");
                }
            });
        });
        return this.players;
    }
    getWinner() {
        let best = this.players.sort(function (a, b) {
            return a.points - b.points;
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points);
    }
}
