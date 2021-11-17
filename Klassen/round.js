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
        while (this.hasRoundEndet() == false) {
            this.players.forEach(player => {
                player.dropStone();
            });
        }
        this.players.forEach(player => {
            player.addPoints();
        });
    }
}
