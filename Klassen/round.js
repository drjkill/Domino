import { Pool } from "./pool.js";
import { Player } from "./player.js";
export class Round {
    constructor() {
        this.gameArea = [];
        this.players = [];
        this.deck = [];
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
    play() {
        this.players.forEach(player => {
            console.log(player.playerDeck);
            if (player.playerDeck.length > 0) {
                const action = this.deck.forEach(stone => {
                    if (stone.rightSide === this.gameArea[0].leftSide) {
                        console.log(stone);
                    }
                    else if (stone.leftSide == this.gameArea[this.gameArea.length - 1].rightSide) {
                    }
                    else {
                        if (this.pool.pool.length > 0) {
                        }
                        else {
                            console.log("Pool is empty!!");
                        }
                    }
                });
                return action;
            }
            else {
                console.log(player.playerName + "Wins!");
            }
        });
    }
    getWinner() {
        let best = this.players.sort(function (a, b) {
            return a.points - b.points;
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points);
    }
}
const round = new Round();
console.log(round.play());
