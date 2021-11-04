import { Player } from "./player.js";
import { Round } from "./round.js";
export class Game {
    constructor(roundNumber) {
        this.rounds = [];
        this.players = [];
        this.addPlayer(new Player("p1"));
        this.addPlayer(new Player("p2"));
        this.addPlayer(new Player("c1"));
        this.addPlayer(new Player("c2"));
        for (let i = 1; i <= roundNumber; i++) {
            const round = new Round();
            this.rounds.push(round);
        }
    }
    addPlayer(player) {
        this.players.push(player);
        return player;
    }
    getWinner() {
    }
}
