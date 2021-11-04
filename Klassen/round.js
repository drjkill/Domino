import { Pool } from "./pool.js";
import { Player } from "./player.js";
export class Round {
    constructor() {
        this.players = [];
        this.addPlayer(new Player("p1"));
        this.addPlayer(new Player("p2"));
        this.addPlayer(new Player("c1"));
        this.addPlayer(new Player("c2"));
        const pool = new Pool();
        this.pool = pool;
    }
    getPool() {
        return this.pool;
    }
    addPlayer(player) {
        if (this.players.length < 4) {
            this.players.push(player);
        }
        return player;
    }
}
