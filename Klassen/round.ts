import { Pool } from "./pool.js";
import { Player } from "./player.js";
import { Stone } from "../Interface/stone.js";

//=================================================================================================

export class Round {
    gameArea: Array<Stone> = []
    players: Array<Player> = []
    pool: Pool;
    deck: Array<Stone> = []
    winner!: Player;
    constructor(players: Player[]) {
        this.players = players
        const pool = new Pool()
        this.pool = pool
        this.setUpDeck()
        this.setUpGameArea()

    }
    setUpDeck() {
        this.players.forEach(player => {
            player.setPlayerDeck(this.pool.getPlayerDeck())
        })
    }
    setUpGameArea() {
        this.setGameArea(this.pool.getGameArea())
    }
    setGameArea(gameArea: Stone[]): void {
        this.gameArea = gameArea
    }
    getGameArea() {
        return this.gameArea
    }
    getPool(): Pool {
        return this.pool;
    }
    addPlayer(player: Player): Player {
        this.players.push(player)
        return player
    }
    hasRoundEndet(): boolean {
        this.players.forEach(player => {
            if (player.isDeckEmpty()) {
                return true;
            }
        }); 
        return false
    }
    play(): Player[] {

        /**
         * wenn (runde nicht zuende ist)
         * spieler macht zug (action)
         */




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
        }); return this.players
    }
    getWinner(): void {
        let best = this.players.sort(function (a: Player, b: Player) {
            return (a.points as number) - (b.points as number);
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points)
    }
}

//=================================================================================================

//const round = new Round()
//console.log(round)
//console.log(round.setUpDeck())
//console.log(round.setUpGameArea())
//console.log(round.getGameArea())
//console.log(round.getPool())
//console.table(round.play())
//console.log(round.getWinner())


