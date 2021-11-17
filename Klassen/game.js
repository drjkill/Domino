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
            const round = new Round(this.players);
            this.rounds.push(round);
        }
    }
    addPlayer(player) {
        this.players.push(player);
        return player;
    }
    getplayer() {
        return this.players;
    }
    getWinner() {
        let best = this.players.sort(function (a, b) {
            return a.points - b.points;
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points);
    }
}
const game = new Game(1);
console.table(game.rounds[0].play());
console.table(game.rounds);
console.table(game.rounds[0].players[1].points);
