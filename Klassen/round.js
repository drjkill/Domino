import { Pool } from "./pool.js";
import { Player } from "./player.js";
export class Round {
    constructor() {
        this.gameArea = [];
        this.players = [];
        this.addPlayer(new Player("p1", 1));
        this.addPlayer(new Player("p2", 2));
        this.addPlayer(new Player("c1", 3));
        this.addPlayer(new Player("c2", 4));
        const pool = new Pool();
        this.pool = pool;
        this.setUpDeck();
        this.setUpGameArea();
    }
    setUpDeck() {
        this.players.forEach(player => {
            player.setDeck(this.pool.getDeck());
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
    getWinner() {
        let best = this.players.sort(function (a, b) {
            return a.points - b.points;
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points);
    }
}
